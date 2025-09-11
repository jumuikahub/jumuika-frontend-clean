#!/usr/bin/env node
/**
 * setup-fresh-clone.js
 * -------------------------------------------
 * Auto-bootstrap Husky hooks, enforce baseline checks,
 * and safeguard fresh clones for all devs & CI.
 * Future-proofed for Husky v9+ (uses `husky init`).
 */

const { execSync } = require("child_process");

function run(cmd, msg) {
  try {
    console.log(`\x1b[36m[SETUP]\x1b[0m Running: ${cmd}`);
    execSync(cmd, { stdio: "inherit" });
    if (msg) console.log(`\x1b[32m✔\x1b[0m ${msg}`);
  } catch (err) {
    console.error(`\x1b[31m✘ Failed:\x1b[0m ${cmd}`);
    process.exit(1);
  }
}

console.log("\n🚀 Starting fresh-clone setup…\n");

// 1. Ensure deps are installed
run("npm install", "Dependencies installed");

// 2. Initialize Husky v9+
//    This replaces `husky install`.
//    It will generate a .husky/pre-commit hook that runs `npm test`.
run("npx husky init .husky 'npm test'", "Husky hooks initialized");

// 3. Add safeguard (CI baseline check, no Jest allowed)
run(
  `npx husky add .husky/pre-commit "npm run ci:check"`,
  "Safeguard (ci:check) wired into pre-commit"
);

console.log("\n✅ Fresh clone setup completed successfully.\n");
