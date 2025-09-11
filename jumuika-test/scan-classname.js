// scan-classname.js
// Usage: node scan-classname.js
// Scans all .tsx files in /components and reports components missing className forwarding.

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

function checkClassName(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");

  // 1. Check if 'className' exists in the props interface/type
  const hasClassNameProp =
    /className\s*\??\s*:\s*string/.test(content) ||
    /extends\s+React\.\w+Attributes<[^>]+>/.test(content) ||
    /\{[^}]*className[^}]*\}/.test(content);

  if (!hasClassNameProp) {
    return false;
  }

  // 2. Check if className is applied to root element
  // Simple heuristic: look for className={...}
  const rootApplied = /className\s*=\s*\{[^}]*className[^}]*\}/.test(content);
  if (!rootApplied) {
    return false;
  }

  return true;
}

const tsxFiles = getAllTsxFiles(COMPONENTS_DIR);
const missingClassName = [];

tsxFiles.forEach((file) => {
  const ok = checkClassName(file);
  if (!ok) missingClassName.push(file);
});

if (missingClassName.length === 0) {
  console.log("✅ All components correctly forward className.");
} else {
  console.log("⚠️ Components missing className forwarding:");
  missingClassName.forEach((f) => console.log(" - " + f));
}
