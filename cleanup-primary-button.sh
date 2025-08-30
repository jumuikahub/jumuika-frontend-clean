#!/bin/bash
# cleanup-primary-button.sh
# Final Consultant Version: Deduplicate PrimaryButton, normalize imports, repair git index, run Vercel build

set -euo pipefail

BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "📌 Current branch: $BRANCH"

# --- Step 0: Safety guard ---
if [ "$BRANCH" != "main" ]; then
  echo "❌ Refusing to run: must be on main branch, you are on $BRANCH"
  exit 1
fi

# --- Step 0.5: Repair git index if corrupted ---
echo "🛠️ Repairing Git index if corrupted..."
if ! git status &>/dev/null; then
  mv .git/index .git/index.backup || true
  git reset
  echo "✔ Git index repaired."
else
  echo "✔ Git index healthy."
fi

# --- Step 1: Remove duplicate PrimaryButton ---
echo "🗑️ Step 1: Removing duplicate PrimaryButton..."
if [ -f components/common/PrimaryButton.tsx ]; then
  rm components/common/PrimaryButton.tsx
  echo "✔ Removed components/common/PrimaryButton.tsx"
else
  echo "⚠️ components/common/PrimaryButton.tsx already gone, skipping"
fi

# --- Step 2: Fix imports pointing to common/PrimaryButton ---
echo "🔍 Step 2: Fixing imports that referenced components/common/PrimaryButton..."
grep -rl '@/components' . || true
grep -rl '@/components' . | while read -r file; do
  sed -i 's|@/components|@/components|g' "$file"
  echo "✔ Updated import in $file"
done

# --- Step 3: Normalize stray imports of PrimaryButton ---
echo "✨ Step 3: Normalizing any stray direct imports of PrimaryButton..."
grep -rl '@/components' . | while read -r file; do
  sed -i 's|@/components|@/components|g' "$file"
  echo "✔ Updated import in $file"
done

# --- Step 4: Fix accidental double @/components ---
echo "🩹 Step 4: Fixing doubled @/components imports..."
grep -rl '@/components' . | while read -r file; do
  sed -i 's|@/components|@/components|g' "$file"
  echo "✔ Fixed doubled import in $file"
done

# --- Step 5: Stage, commit & push ---
echo "📦 Step 5: Git add & commit..."
git add .
if git diff --cached --quiet; then
  echo "✅ No changes to commit."
else
  git commit -m "Chore: cleanup PrimaryButton, repair index, fix imports"
  git push origin main
  echo "🚀 Changes committed and pushed."
fi

# --- Step 6: Run local Vercel build to confirm ---
echo "🔧 Step 6: Running vercel build locally..."
npx vercel build || { echo "❌ Vercel build failed"; exit 1; }

echo "🎉 Cleanup and build finished successfully!"
