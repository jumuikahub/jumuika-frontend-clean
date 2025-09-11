// scripts/fix-imports.mjs
import { readdirSync, readFileSync, writeFileSync, statSync } from "fs";
import { join, extname } from "path";

const ROOT = process.cwd();
const EXCLUDE_DIRS = new Set([
  "node_modules",
  ".next",
  ".vercel",
  ".git",
  "dist",
  "build",
  "coverage",
]);

const TS_LIKE = new Set([".ts", ".tsx"]);

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (!EXCLUDE_DIRS.has(entry)) walk(full, files);
    } else if (TS_LIKE.has(extname(entry))) {
      files.push(full);
    }
  }
  return files;
}

const files = walk(ROOT);
let changed = 0;

const REPLACERS = [
  // default import -> named from "@/components"
  {
    re: /import\s+PrimaryButton\s+from\s+['"]@\/components\/ui(?:\/PrimaryButton)?['"]\s*;?/g,
    to: `import { PrimaryButton } from "@/components";`,
  },
  // named import from ui -> named from "@/components"
  {
    re: /import\s*\{\s*PrimaryButton\s*\}\s*from\s+['"]@\/components\/ui(?:\/PrimaryButton)?['"]\s*;?/g,
    to: `import { PrimaryButton } from "@/components";`,
  },
];

for (const f of files) {
  const before = readFileSync(f, "utf8");
  let after = before;
  for (const { re, to } of REPLACERS) {
    after = after.replace(re, to);
  }
  if (after !== before) {
    writeFileSync(f, after, "utf8");
    changed++;
    console.log(`✔ Updated imports in: ${f}`);
  }
}

console.log(`\nDone. Files changed: ${changed}`);
