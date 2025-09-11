#!/bin/bash
# Prevent committing ESLint v9 config into the repo

if [ -f "eslint.config.js" ]; then
  echo "❌ ERROR: eslint.config.js detected."
  echo "This project is pinned to ESLint v8. Remove eslint.config.js before committing."
  exit 1
fi

# Optional: also block node_modules commits
if git diff --cached --name-only | grep -q "^node_modules/"; then
  echo "❌ ERROR: node_modules/ should never be committed."
  exit 1
fi

echo "✅ Pre-commit checks passed."
