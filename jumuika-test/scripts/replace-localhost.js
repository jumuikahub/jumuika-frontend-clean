// scripts/replace-localhost.js
// Run with: node scripts/replace-localhost.js

import fs from "fs";
import path from "path";

const targetDir = process.cwd();
const search = /http:\/\/localhost:3000/g;
const replacement = "process.env.NEXT_PUBLIC_APP_URL";

// Recursive function to scan and replace
function scanDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filepath = path.join(dir, file);

    if (fs.statSync(filepath).isDirectory()) {
      if (filepath.includes("node_modules") || filepath.includes(".next")) {
        return; // skip
      }
      scanDir(filepath);
    } else if (
      file.endsWith(".ts") ||
      file.endsWith(".tsx") ||
      file.endsWith(".js")
    ) {
      let content = fs.readFileSync(filepath, "utf8");
      if (search.test(content)) {
        console.log(`Replacing in: ${filepath}`);
        content = content.replace(search, replacement);
        fs.writeFileSync(filepath, content, "utf8");
      }
    }
  });
}

scanDir(targetDir);
console.log("✅ Replacement completed.");
