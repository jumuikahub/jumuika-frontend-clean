#!/bin/bash
# fix-imports.sh
# Final Consultant Version: Normalize constants imports, cleanup unused, unify @/components imports, auto-commit.
# Now with progress logs at every step ✅

set -euo pipefail

BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "📌 Branch: $BRANCH"

# --- Step 1: Normalize all constants imports ---
echo "🔍 Step 1: Normalizing constants imports..."
grep -rl 'import { BRAND, TAGLINE, WHATSAPP_CTA_URL } from "@/lib/constants"' . \
  | xargs sed -i 's/import constants from "@\/lib\/constants"/import { BRAND, TAGLINE, WHATSAPP_CTA_URL } from "@\/lib\/constants"/g' || true
echo "✅ Step 1 done."

# --- Step 2: Remove unused constants safely ---
echo "🧹 Step 2: Cleaning unused constants..."
for SYMBOL in TAGLINE WHATSAPP_CTA_URL BRAND; do
  for file in $(grep -rl "import {.*$SYMBOL" . || true); do
    if ! grep -q "$SYMBOL" "$file"; then
      sed -i "s/, $SYMBOL//g; s/{ $SYMBOL, /{ /g; s/{ $SYMBOL }//g" "$file"
      echo "✔ Cleaned $SYMBOL from $file"
    fi
  done
done
echo "✅ Step 2 done."

# --- Step 3: Normalize braces/commas ---
echo "✨ Step 3: Normalizing braces and commas..."
find . -type f \( -name "*.ts" -o -name "*.tsx" \) \
  -exec sed -i 's/,  }/ }/g; s/{  }/ /g; s/import {  /import { /g' {} +
echo "✅ Step 3 done."

# --- Step 4: Unify all component imports ---
echo "🎯 Step 4: Unifying @/components imports..."
find . -type f \( -name "*.ts" -o -name "*.tsx" \) \
  -exec sed -i 's|@/components/ui|@/components|g' {} +
echo "✅ Step 4 done."

# --- Step 5: Git commit workflow ---
echo "📦 Step 5: Committing changes (if any)..."
git add .

if git diff --cached --quiet; then
  echo "✅ No changes to commit."
else
  git commit -m "Chore: normalize constants & unify @/components imports"
  git push origin "$BRANCH"
  echo "🚀 Changes committed and pushed."
fi

echo "🎉 All steps completed successfully!"
