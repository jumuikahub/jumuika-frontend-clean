#!/usr/bin/env node
// setup-fresh-clone.cjs
const { execSync } = require("child_process");

console.log("🔧 Setting up fresh clone...");

// 1. Install deps
execSync("npm install", { stdio: "inherit" });

// 2. Setup Husky
execSync("npx husky install", { stdio: "inherit" });

console.log("✅ Fresh clone setup complete.");
