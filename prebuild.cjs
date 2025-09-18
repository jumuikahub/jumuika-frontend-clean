#!/usr/bin/env node
// prebuild.cjs
const { execSync } = require("child_process");

console.log("⚡ Prebuild checks...");

try {
  execSync("npm run lint", { stdio: "inherit" });
  console.log("✅ Lint passed.");
} catch (err) {
  console.error("❌ Lint failed.");
  process.exit(1);
}

try {
  execSync("npm test --if-present", { stdio: "inherit" });
  console.log("✅ Tests passed.");
} catch (err) {
  console.error("❌ Tests failed.");
  process.exit(1);
}

console.log("🚀 Prebuild checks complete.");
