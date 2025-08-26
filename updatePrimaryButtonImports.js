const fs = require("fs");
const path = require("path");

// Scan the project root instead of src
const baseDir = path.join(__dirname); 

function scanFiles(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      // Skip node_modules and .git
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
  const regex = /from ['"]@\/components\/ui\/PrimaryButton['"]/g;
  if (regex.test(content)) {
    content = content.replace(regex, "from '@/components/common/PrimaryButton'");
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Updated imports in: ${filePath}`);
  }
}

const allFiles = scanFiles(baseDir);
allFiles.forEach(updateImports);

console.log("All PrimaryButton imports updated!");
