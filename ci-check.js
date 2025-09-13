#!/usr/bin/env node
const { execSync } = require("child_process");

// ANSI colors
const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const RESET = "\x1b[0m";

function runCheck(command, label) {
  try {
    console.log(`\n[CHECK] Running: ${command}`);
    execSync(command, { stdio: "inherit" });
    console.log(`${GREEN}✔ ${label} passed${RESET}`);
  } catch (err) {
    console.error(`${RED}✘ ${label} failed${RESET}`);
    process.exit(1); // hard fail
  }
}

console.log("🚦 Starting baseline CI checks…");

runCheck("npx eslint .", "ESLint");
runCheck("npx prettier --check .", "Prettier");
runCheck("npx tsc --noEmit", "TypeScript");

console.log(`\n${GREEN}✅ Baseline checks passed${RESET}`);
