// scan-import-exports.js
// Usage:
//   node scan-import-exports.js           -> report mismatches
//   node scan-import-exports.js --fix     -> auto-fix imports in-place
//
// Requirements: `npm i -D typescript ts-morph`
// Reads tsconfig.json for baseUrl/paths (supports "@/..." alias)

const path = require("path");
const { Project, ScriptTarget, ModuleResolutionKind } = require("ts-morph");

const FIX = process.argv.includes("--fix");

// Heuristics: which files to include in the scan
const INCLUDE_GLOBS = [
  "app/**/*.ts",
  "app/**/*.tsx",
  "components/**/*.ts",
  "components/**/*.tsx",
  "lib/**/*.ts",
  "lib/**/*.tsx",
  "pages/**/*.ts",
  "pages/**/*.tsx",
];

function loadProject() {
  const project = new Project({
    tsConfigFilePath: path.join(process.cwd(), "tsconfig.json"),
    // Fallback compiler options if tsconfig misses some
    skipAddingFilesFromTsConfig: false,
    compilerOptions: {
      target: ScriptTarget.ES2020,
      moduleResolution: ModuleResolutionKind.NodeJs,
      allowJs: false,
      checkJs: false,
    },
  });

  // Ensure our globs are added (in case tsconfig includes are narrow)
  INCLUDE_GLOBS.forEach((g) => project.addSourceFilesAtPaths(g));
  project.resolveSourceFileDependencies();
  return project;
}

function getExportsMap(sourceFile) {
  const exportsInfo = {
    hasDefault: false,
    named: new Set(),
  };

  // default export?
  const defaultExportSymbol = sourceFile.getDefaultExportSymbol();
  if (defaultExportSymbol) exportsInfo.hasDefault = true;

  // named exports
  const exportSymbols = sourceFile.getExportSymbols();
  exportSymbols.forEach((sym) => {
    const name = sym.getName();
    if (name !== "default") exportsInfo.named.add(name);
  });

  // Also catch `export function X` etc.
  sourceFile.getFunctions().forEach((fn) => {
    if (fn.isExported() && !fn.isDefaultExport()) {
      exportsInfo.named.add(fn.getName());
    }
    if (fn.isDefaultExport()) {
      exportsInfo.hasDefault = true;
    }
  });
  sourceFile.getClasses().forEach((cls) => {
    if (cls.isExported() && !cls.isDefaultExport()) {
      exportsInfo.named.add(cls.getName());
    }
    if (cls.isDefaultExport()) {
      exportsInfo.hasDefault = true;
    }
  });
  sourceFile.getVariableStatements().forEach((vs) => {
    if (vs.isExported()) {
      vs.getDeclarations().forEach((d) => {
        const n = d.getName();
        // e.g. `export const Foo = ...`
        if (n && !n.includes("=")) exportsInfo.named.add(n);
      });
    }
  });

  return exportsInfo;
}

function resolveModuleToSourceFile(project, fromFile, spec) {
  // Ignore node_modules / bare packages
  if (!spec.startsWith(".") && !spec.startsWith("@/")) return null;

  let resolved = spec;

  // Handle "@/..." alias to project root (tsconfig paths should map this)
  if (spec.startsWith("@/")) {
    // Let ts-morph resolve via tsconfig paths if present.
    // Otherwise fallback to manual replacement to src root.
  }

  const moduleSourceFile = fromFile.getProject().getSourceFile((sf) => {
    // Use TS resolution: getImportDeclarations() already link to source if in project
    // Fallback: try to match by ending path segments
    const sfFilePath = sf.getFilePath();
    // Quick checks:
    if (sfFilePath.endsWith(spec + ".ts")) return true;
    if (sfFilePath.endsWith(spec + ".tsx")) return true;
    if (sfFilePath.endsWith(path.join(spec, "index.ts"))) return true;
    if (sfFilePath.endsWith(path.join(spec, "index.tsx"))) return true;
    // Also try without leading "./"
    const noDot = spec.startsWith("./") ? spec.slice(2) : spec;
    if (sfFilePath.endsWith(noDot + ".ts")) return true;
    if (sfFilePath.endsWith(noDot + ".tsx")) return true;
    if (sfFilePath.endsWith(path.join(noDot, "index.ts"))) return true;
    if (sfFilePath.endsWith(path.join(noDot, "index.tsx"))) return true;
    return false;
  });

  return moduleSourceFile || null;
}

function guessNamedForPath(spec) {
  // Guess a symbol name from the last path segment, e.g. /PrimaryCTAs -> PrimaryCTAs
  const base = spec.split("/").filter(Boolean).pop() || "DefaultExport";
  const cleaned = base.replace(/\.[tj]sx?$/, "");
  return cleaned.match(/^[A-Za-z_]\w*$/) ? cleaned : "DefaultExport";
}

function processProject(project) {
  const mismatches = [];

  for (const sf of project.getSourceFiles()) {
    // Only .ts/.tsx in our include globs effectively
    sf.getImportDeclarations().forEach((imp) => {
      const spec = imp.getModuleSpecifierValue();
      const target = resolveModuleToSourceFile(project, sf, spec);
      if (!target) return; // external or unresolved

      const exp = getExportsMap(target);

      // Current import shape
      const defaultImport = imp.getDefaultImport(); // e.g. import Foo from '...'
      const namedImports = imp.getNamedImports().map((ni) => ni.getName()); // e.g. { A, B }
      const hasNamespace = !!imp.getNamespaceImport(); // import * as X from '...'

      if (hasNamespace) return; // skip wildcard imports

      // Case 1: default import used but no default export in target
      if (defaultImport && !exp.hasDefault) {
        mismatches.push({
          file: sf.getFilePath(),
          spec,
          issue: "Default import used but target has no default export.",
        });

        if (FIX) {
          // Convert default import to named import.
          // Try to preserve intended symbol by guessing from path if not present.
          let useName = defaultImport.getText();
          // If that name doesn't exist in target, fallback to guess
          if (!exp.named.has(useName)) {
            const guessed = guessNamedForPath(spec);
            useName = exp.named.has(guessed) ? guessed : Array.from(exp.named)[0] || guessed;
          }

          // Remove default import; ensure named import includes useName
          imp.removeDefaultImport();
          const existing = new Set(imp.getNamedImports().map((n) => n.getName()));
          if (!existing.has(useName)) imp.addNamedImport(useName);
        }
      }

      // Case 2: named import used but target only has default (and not that named)
      if (!defaultImport && namedImports.length > 0) {
        const hasAnyNamed = namedImports.some((n) => exp.named.has(n));
        const targetOnlyDefault = exp.hasDefault && exp.named.size === 0;

        if (targetOnlyDefault && !hasAnyNamed) {
          mismatches.push({
            file: sf.getFilePath(),
            spec,
            issue: "Named import(s) used but target only exports default.",
          });

          if (FIX) {
            // Replace named imports with default import
            imp.removeNamedImports();
            const defName = guessNamedForPath(spec);
            imp.setDefaultImport(defName);
          }
        }
      }
    });
  }

  return mismatches;
}

function main() {
  const project = loadProject();
  const mismatches = processProject(project);

  if (mismatches.length === 0) {
    console.log("✅ No default/named import mismatches detected.");
  } else {
    console.log("⚠️ Mismatches detected:");
    mismatches.forEach((m) => {
      console.log(`- ${path.relative(process.cwd(), m.file)} -> "${m.spec}": ${m.issue}`);
    });
    if (FIX) {
      project.saveSync();
      console.log("\n🛠  Applied fixes in-place. Review with `git diff`.");
    } else {
      console.log('\nRun with "--fix" to apply automatic fixes.');
    }
  }
}

main();
