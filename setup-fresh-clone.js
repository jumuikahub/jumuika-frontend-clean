#!/usr/bin/env node

/**
 * setup-fresh-clone.js
 *
 * Enforces a clean setup whenever someone clones the repo:
 *  - Removes node_modules and lockfile
 *  - Runs install
 *  - Blocks Jest (not allowed in this project)
 *  - Runs npm audit (fail immediately on vulnerabilities)
 *  - Installs Husky hooks
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Prevent double-run
const marker = path.join(__dirname, ".setup-fresh-clone-ran");
if (fs.existsSync(marker)) {
  console.log("⚡ setup-fresh-clone.js already ran. Skipping.");
  process.exit(0);
}

// 1. Clean environment
console.log("🧹 Cleaning environment...");
try {
  execSync("rm -rf node_modules package-lock.json", { stdio: "inherit" });
} catch (e) {
  console.error("Warning: cleanup step failed:", e.message);
}

// 2. Install deps
console.log("📦 Installing dependencies...");
execSync("npm install", { stdio: "inherit" });

// 3. Safeguard: block Jest
const pkg = require("./package.json");
if (
  (pkg.devDependencies && pkg.devDependencies.jest) ||
  (pkg.dependencies && pkg.dependencies.jest) ||
  pkg.jest
) {
  console.error("❌ Jest is not allowed in this repository.");
  process.exit(1);
}
console.log("✅ No Jest detected.");

// 4. Security audit (fail on vulnerabilities)
console.log("🔒 Running npm audit...");
try {
  execSync("npm audit --production --audit-level=high", { stdio: "inherit" });
  console.log("✅ No blocking vulnerabilities found.");
} catch (e) {
  console.error("❌ Security audit failed. Fix vulnerabilities before continuing.");
  process.exit(1);
}

// 5. Setup Husky (git hooks)
console.log("🔗 Setting up Husky hooks...");
execSync("npx husky install", { stdio: "inherit" });

// Mark completion
fs.writeFileSync(marker, "done");
console.log("🎉 Fresh clone setup complete.");
