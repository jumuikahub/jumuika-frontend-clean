#!/usr/bin/env node

/**
 * setup-fresh-clone.js
 *
 * Ensures Husky and Git hooks are automatically set up
 * when the repo is freshly cloned.
 */

const { execSync } = require("child_process");

function run(cmd) {
  try {
    console.log(`\x1b[36m▶ Running:\x1b[0m ${cmd}`);
    execSync(cmd, { stdio: "inherit" });
  } catch (err) {
    console.error(`\x1b[31m✖ Failed:\x1b[0m ${cmd}`);
    process.exit(1);
  }
}

// Install dependencies
run("npm install");

// Ensure Husky is enabled
run("npx husky install");

// Make sure pre-commit hook exists
run("cat > .husky/pre-commit <<'EOF'\n#!/bin/sh\n. \"$(dirname \"$0\")/_/husky.sh\"\nnpm run lint\nEOF");

// Give execute permission
run("chmod +x .husky/pre-commit");

console.log("\x1b[32m✅ Husky setup complete! Pre-commit hook installed.\x1b[0m");
