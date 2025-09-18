#!/usr/bin/env node
const { execSync } = require("child_process");

console.log("🛠 Bootstrapping fresh clone...");

try {
  // 1. Install dependencies
  console.log("📦 Installing dependencies...");
  execSync("npm install", { stdio: "inherit" });

  // 2. Install Husky hooks
  console.log("🔗 Setting up Husky hooks...");
  execSync("npx husky install", { stdio: "inherit" });

  console.log("✅ Fresh clone setup complete!");
} catch (err) {
  console.error("❌ Fresh clone setup failed:", err);
  process.exit(1);
}
