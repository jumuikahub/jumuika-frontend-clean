#!/usr/bin/env node
/**
 * Jumuika Hub KE – Setup Script
 * Ensures fresh environment setup consistency.
 * - Verifies core files exist
 * - Runs safety checks
 * - Provides ✅/❌ colored logs
 */

const fs = require("fs");
const path = require("path");

// ANSI colors
const colors = {
  green: (msg) => `\x1b[32m${msg}\x1b[0m`,
  red: (msg) => `\x1b[31m${msg}\x1b[0m`,
  yellow: (msg) => `\x1b[33m${msg}\x1b[0m`
};

// Core files required for baseline
const requiredFiles = [
  "app/(site)/page.tsx",
  "app/(site)/about/page.tsx",
  "app/(site)/blog/page.tsx",
  "app/(site)/how-it-works/page.tsx",
  "app/(site)/terms/page.tsx",
  "app/(site)/privacy/page.tsx",
  "tailwind.config.ts",
  "postcss.config.js"
];

let errors = 0;

console.log(colors.yellow("🔍 Running Jumuika baseline checks..."));

for (const file of requiredFiles) {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    console.error(colors.red(`❌ Missing: ${file}`));
    errors++;
  } else {
    console.log(colors.green(`✅ Found: ${file}`));
  }
}

if (errors > 0) {
  console.error(colors.red(`\n❌ Baseline checks failed. Missing ${errors} file(s).`));
  process.exit(1);
}

console.log(colors.green("\n✅ Baseline checks passed. Environment ready!"));
