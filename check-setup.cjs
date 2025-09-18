#!/usr/bin/env node
const fs = require("fs");

console.log("🔍 Checking repo setup...");

if (!fs.existsSync(".husky/pre-commit")) {
  console.error("❌ Husky pre-commit hook missing!");
  process.exit(1);
}

console.log("✅ Husky hooks are installed correctly.");
