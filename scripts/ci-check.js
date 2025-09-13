#!/usr/bin/env node
const { execSync } = require("child_process");

const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const RESET = "\x1b[0m";

function runCheck(command, description) {
  try {
    execSync(command, { stdio: "inherit" });
    console.log(`${GREEN}✔ ${description}${RESET}`);
    return true;
  } catch (err) {
    console.error(`${RED}✘ ${description}${RESET}`);
    return false;
  }
}

console.log("\n🔍 Running CI checks…\n");

let success = true;
success &= runCheck("npm run lint", "Linting passed");
success &= runCheck("npm run format", "Formatting passed");
success &= runCheck("npm run type-check", "TypeScript build passed");

if (success) {
  console.log(`${GREEN}✅ All CI checks passed${RESET}\n`);
  process.exit(0);
} else {
  console.error(`${RED}❌ CI checks failed. Please fix issues before committing.${RESET}\n`);
  process.exit(1);
}
