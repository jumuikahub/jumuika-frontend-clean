const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.join(__dirname, "app", "(site)");

function scanAndFix(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      scanAndFix(fullPath);
    } else if (entry.isFile() && entry.name === "page.tsx") {
      fixFile(fullPath);
    }
  });
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  // Already has React import? Skip
  if (/import\s+React\s+from\s+["']react["']/.test(content)) {
    console.log(`✅ Skipped (already has React): ${filePath}`);
    return;
  }

  let newContent;

  if (/^"use client";/.test(content.trimStart())) {
    // If "use client" is the first line, insert after it
    newContent = content.replace(
      /^("use client";\s*\n)/,
      `$1import React from "react";\n`
    );
  } else {
    // Otherwise, insert at very top
    newContent = `import React from "react";\n${content}`;
  }

  fs.writeFileSync(filePath, newContent, "utf8");
  console.log(`✨ Fixed: ${filePath}`);
}

scanAndFix(ROOT_DIR);
console.log("🚀 React imports check complete!");
