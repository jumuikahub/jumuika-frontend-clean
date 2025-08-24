// auto-patch-classname.js
// Usage: node auto-patch-classname.js
// Scans all .tsx files in /components for missing className forwarding
// and auto-patches them in-place with a safe backup.

const fs = require("fs");
const path = require("path");

const COMPONENTS_DIR = path.join(__dirname, "components");
const BACKUP_DIR = path.join(__dirname, "components_backup");

// Ensure backup directory exists
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR);
}

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

function patchFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");

  const hasClassNameProp =
    /className\s*\??\s*:\s*string/.test(content) ||
    /extends\s+React\.\w+Attributes<[^>]+>/.test(content) ||
    /\{[^}]*className[^}]*\}/.test(content);

  const rootApplied = /className\s*=\s*\{[^}]*className[^}]*\}/.test(content);

  if (hasClassNameProp && rootApplied) return false;

  // Backup original file
  const relativePath = path.relative(COMPONENTS_DIR, filePath);
  const backupPath = path.join(BACKUP_DIR, relativePath);
  const backupFolder = path.dirname(backupPath);
  if (!fs.existsSync(backupFolder)) fs.mkdirSync(backupFolder, { recursive: true });
  fs.writeFileSync(backupPath, content, "utf-8");

  // Attempt auto-patch
  let patchedContent = content;

  // Simple heuristic: add className to first exported function component
  patchedContent = patchedContent.replace(
    /export\s+(default\s+)?function\s+(\w+)\s*\(([^)]*)\)/,
    (match, def, name, params) => {
      if (!params.includes("className")) {
        const newParams = params.trim() === "" ? "{ className = '', ...props }" : `{ className = '', ...props, ${params.replace(/[{}]/g, "")} }`;
        return `export ${def || ""}function ${name}(${newParams})`;
      }
      return match;
    }
  );

  // Add className to first root element if missing
  patchedContent = patchedContent.replace(
    /return\s*\(\s*<([a-zA-Z][\w-]*)/m,
    (match, tag) => `${match} className={className}`
  );

  // Save patched file
  fs.writeFileSync(filePath, patchedContent, "utf-8");
  return true;
}

const tsxFiles = getAllTsxFiles(COMPONENTS_DIR);
let patchedCount = 0;

tsxFiles.forEach((file) => {
  const patched = patchFile(file);
  if (patched) patchedCount++;
});

console.log(`✅ Auto-patched ${patchedCount} component(s). Backups stored in components_backup/`);
