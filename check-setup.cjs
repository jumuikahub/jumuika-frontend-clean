#!/usr/bin/env node
// check-setup.cjs
const fs = require("fs");
const path = require("path");

console.log("🔍 Running baseline checks...");

// Ensure husky is installed
const huskyDir = path.join(process.cwd(), ".husky");
if (!fs.existsSync(huskyDir)) {
  console.error("❌ Husky directory missing!");
  process.exit(1);
}

// Ensure node_modules exists
if (!fs.existsSync(path.join(process.cwd(), "node_modules"))) {
  console.error("❌ node_modules missing! Run npm install first.");
  process.exit(1);
}

console.log("✅ Baseline checks passed.");
