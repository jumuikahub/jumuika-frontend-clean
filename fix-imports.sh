#!/bin/bash
# fix-imports.sh
# Final Consultant Version: Normalize constants imports across repo, cleanup unused, auto-commit.

set -euo pipefail

BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "📌 Branch: $BRANCH"

# --- Step 1: Normalize all constants imports ---
grep -rl 'import constants from "@/lib/constants"' . \
  | xargs sed -i 's/import constants from "@\/lib\/constants"/import { BRAND, TAGLINE, WHATSAPP_CTA_URL } from "@\/lib\/constants"/g' || true

# --- Step 2: Remove unused constants safely ---
for SYMBOL in TAGLINE WHATSAPP_CTA_URL BRAND; do
  for file in $(grep -rl "import {.*$SYMBOL" . || true); do
    if ! grep -q "$SYMBOL" "$file"; then
      sed -i "s/, $SYMBOL//g; s/{ $SYMBOL, /{ /g; s/{ $SYMBOL }//g" "$file"
      echo "✔ Cleaned $SYMBOL from $file"
    fi
  done
done

# --- Step 3: Normalize braces/commas ---
find . -type f \( -name "*.ts" -o -name "*.tsx" \) \
  -exec sed -i 's/,  }/ }/g; s/{  }/ /g; s/import {  /import { /g' {} +

# --- Step 4: Git commit workflow ---
git add .

if git diff --cached --quiet; then
  echo "✅ No import changes needed."
else
  git commit -m "Chore: normalize constants imports & cleanup unused symbols"
  git push origin "$BRANCH"
  echo "🚀 Imports fixed and pushed."
fi
