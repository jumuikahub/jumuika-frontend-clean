// scan-and-fix-classname.js
// Usage: node scan-and-fix-classname.js
// Scans all .tsx files in /components for missing className forwarding
// and outputs suggested fix templates.

const fs = require("fs");
const path = require("path");

const COMPONENTS_DIR = path.join(__dirname, "components");

function getAllTsxFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllTsxFiles(fullPath, files);
    } else if (entry.isFile() && fullPath.endsWith(".tsx")) {
      files.push(fullPath);
    }
  }
  return files;
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");

  const hasClassNameProp =
    /className\s*\??\s*:\s*string/.test(content) ||
    /extends\s+React\.\w+Attributes<[^>]+>/.test(content) ||
    /\{[^}]*className[^}]*\}/.test(content);

  const rootApplied = /className\s*=\s*\{[^}]*className[^}]*\}/.test(content);

  if (hasClassNameProp && rootApplied) return null;

  const componentNameMatch = content.match(/export\s+(default\s+)?function\s+(\w+)/);
  const componentName = componentNameMatch ? componentNameMatch[2] : "MyComponent";

  // Generate suggested fix
  const fixTemplate = `// Suggested fix for ${path.relative(COMPONENTS_DIR, filePath)}
import * as React from "react";

type ${componentName}Props = {
  className?: string;
  // add other custom props here
};

export default function ${componentName}({ className = "", ...props }: ${componentName}Props) {
  return (
    <div className={\`/* your base classes */ \${className}\`} {...props}>
      {/* TODO: copy original content here */}
    </div>
  );
}
`;

  return fixTemplate;
}

const tsxFiles = getAllTsxFiles(COMPONENTS_DIR);
const fixes = [];

tsxFiles.forEach((file) => {
  const fix = analyzeFile(file);
  if (fix) fixes.push(fix);
});

if (fixes.length === 0) {
  console.log("✅ All components correctly forward className.");
} else {
  console.log("⚠️ Components missing className forwarding. Suggested fix templates:\n");
  fixes.forEach((f) => console.log(f + "\n---\n"));
}
