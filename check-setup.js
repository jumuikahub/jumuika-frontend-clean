#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ANSI colors
const colors = { reset: '\x1b[0m', red: '\x1b[31m', green: '\x1b[32m', yellow: '\x1b[33m' };

// Logging
const logSuccess = msg => console.log(`${colors.green}✅ ${msg}${colors.reset}`);
const logError = msg => console.error(`${colors.red}❌ ${msg}${colors.reset}`);
const logInfo = msg => console.log(`${colors.yellow}ℹ️ ${msg}${colors.reset}`);

// Paths
const huskyDir = path.join(process.cwd(), '.husky');
const criticalHooks = ['pre-commit', 'pre-push'];
const expectedHookContent = '#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\nnpx lint-staged';

// Step 1: Check Husky folder
if (!fs.existsSync(huskyDir)) {
  logError('.husky directory missing. Run `npm run setup:fresh` to recover.');
  process.exit(1);
}

// Step 2: Check critical hooks
let allHooksValid = true;
criticalHooks.forEach(hook => {
  const hookPath = path.join(huskyDir, hook);
  if (!fs.existsSync(hookPath)) {
    logError(`Missing Husky hook: ${hook}`);
    allHooksValid = false;
    return;
  }

  // Verify hook content
  const content = fs.readFileSync(hookPath, 'utf8').trim();
  if (!content.includes('husky.sh') || !content.includes('lint-staged')) {
    logError(`Husky hook content invalid or corrupted: ${hook}`);
    allHooksValid = false;
  }
});

if (!allHooksValid) {
  logError('Husky hooks verification failed. Run `npm run setup:fresh` to fix.');
  process.exit(1);
}

// Step 3: Rogue prepare script check
const pkg = require(path.join(process.cwd(), 'package.json'));
if (pkg.scripts?.prepare) {
  logError('Rogue prepare script detected in package.json. Remove it.');
  process.exit(1);
}

// Step 4: Final success
logSuccess('✅ Husky integrity verified. All critical hooks present and valid.');
