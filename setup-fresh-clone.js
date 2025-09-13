#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const RESET = "\x1b[0m";

function run(command, description) {
  try {
    console.log(`\n[SETUP] Running: ${command}`);
    execSync(command, { stdio: "inherit" });
    console.log(`${GREEN}✔ ${description}${RESET}`);
  } catch (err) {
    console.error(`${RED}✘ Failed: ${command}${RESET}`);
    process.exit(1);
  }
}

console.log("\n🚀 Starting fresh-clone setup…\n");

// Install dependencies
run("npm install", "Dependencies installed");

// Initialize husky (no noisy init log)
if (!fs.existsSync(".husky")) {
  fs.mkdirSync(".husky");
}
run("npx husky install", "Husky hooks initialized");

// Write pre-commit hook directly (no deprecated husky add)
const hookPath = path.join(".husky", "pre-commit");
const hookContent = `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run ci:check
`;
fs.writeFileSync(hookPath, hookContent, { mode: 0o755 });
console.log(`${GREEN}✔ Pre-commit hook written${RESET}`);

// Run CI check once immediately
try {
  execSync("npm run ci:check", { stdio: "inherit" });
  console.log(`${GREEN}✅ Baseline checks passed${RESET}`);
} catch (err) {
  console.error(`${RED}❌ Baseline checks failed${RESET}`);
  process.exit(1);
}
