const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname); // project root

function scanFiles(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!["node_modules", ".git"].includes(file)) {
        files = files.concat(scanFiles(fullPath));
      }
    } else if (/\.(ts|tsx|js|jsx)$/.test(file)) {
      files.push(fullPath);
    }
  });
  return files;
}

function updateImports(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  const regex = /from ['"]@\/components\/PrimaryButton['"]/g;
  if (regex.test(content)) {
    content = content.replace(regex, "from '@/components'");
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Updated imports in: ${filePath}`);
  }
}

const allFiles = scanFiles(baseDir);
allFiles.forEach(updateImports);

console.log("All PrimaryButton imports updated!");
