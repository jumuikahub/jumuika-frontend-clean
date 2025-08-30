#!/bin/bash
# cleanup-primary-button.sh
# Consultant Script: Remove duplicate PrimaryButton, normalize imports, enforce safety, auto-run vercel build.

set -euo pipefail

BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "📌 Current branch: $BRANCH"

# --- Safety check ---
if [ "$BRANCH" != "main" ]; then
  echo "❌ ERROR: You are on branch '$BRANCH'. This script only runs on 'main'."
  echo "👉 Switch with: git checkout main"
  exit 1
fi

# --- Step 0: Repair possible corrupted Git index ---
echo "🛠️ Checking Git index..."
if ! git status > /dev/null 2>&1; then
  rm -f .git/index
  git reset
  echo "✔ Git index repaired."
else
  echo "✅ Git index healthy."
fi

# --- Step 1: Remove duplicate PrimaryButton ---
echo "🗑️ Step 1: Removing duplicate PrimaryButton..."
if [ -f "components/common/PrimaryButton.tsx" ]; then
  git rm -f components/common/PrimaryButton.tsx
  echo "✔ Removed components/common/PrimaryButton.tsx"
else
  echo "⚠️ components/common/PrimaryButton.tsx already gone, skipping"
fi

# --- Step 2: Fix imports referencing old path ---
echo "🔍 Step 2: Fixing imports referencing components/common/PrimaryButton..."
FILES_UPDATED=$(grep -rl "components/common/PrimaryButton" . --exclude-dir={.git,node_modules,.vercel} || true)
if [ -n "$FILES_UPDATED" ]; then
  echo "$FILES_UPDATED" | while read -r file; do
    sed -i 's#components/common/PrimaryButton#@/components#g' "$file"
    echo "✔ Updated import in $file"
  done
else
  echo "✅ No files referenced components/common/PrimaryButton"
fi

# --- Step 3: Fix imports referencing ui/PrimaryButton directly ---
echo "✨ Step 3: Normalizing any stray direct imports of PrimaryButton from ui..."
FILES_UPDATED_UI=$(grep -rl "components/ui/PrimaryButton" . --exclude-dir={.git,node_modules,.vercel} || true)
if [ -n "$FILES_UPDATED_UI" ]; then
  echo "$FILES_UPDATED_UI" | while read -r file; do
    sed -i 's#components/ui/PrimaryButton#@/components#g' "$file"
    echo "✔ Updated import in $file"
  done
else
  echo "✅ No files referenced components/ui/PrimaryButton"
fi

# --- Step 4: Git add & commit ---
echo "📦 Step 4: Git add & commit..."
git add .

if git diff --cached --quiet; then
  echo "✅ No changes to commit."
else
  git commit -m "Chore: remove duplicate PrimaryButton and unify imports"
  git push origin "$BRANCH"
  echo "🚀 Cleanup committed and pushed."
fi

# --- Step 5: Local build test ---
echo "🧪 Step 5: Running local Vercel build..."
npx vercel build || {
  echo "❌ Vercel build failed. Check errors above."
  exit 1
}

echo "🎉 All steps completed successfully, build passed!"
