#!/bin/bash
# Lead Consultant Script: Fixes all constants imports, cleans unused, commits, and pushes.
# Works for ANY current branch safely.

set -euo pipefail

# --- Detect current branch ---
BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "📌 Current branch: $BRANCH"

# --- Step 1: Replace default import with named imports everywhere ---
echo "🔍 Step 1: Replacing default import with named imports..."
grep -rl 'import constants from "@/lib/constants"' . \
  | xargs sed -i 's/import constants from "@\/lib\/constants"/import { BRAND, TAGLINE, WHATSAPP_CTA_URL } from "@\/lib\/constants"/g' || true

# --- Step 2: Remove unused TAGLINE ---
echo "🔍 Step 2: Removing unused TAGLINE..."
for file in $(grep -rl 'import {.*TAGLINE' . || true); do
  if ! grep -q 'TAGLINE' "$file"; then
    sed -i 's/, TAGLINE//g; s/{ TAGLINE, /{ /g; s/{ TAGLINE }//g' "$file"
    echo "  Cleaned TAGLINE in $file"
  fi
done

# --- Step 3: Remove unused WHATSAPP_CTA_URL ---
echo "🔍 Step 3: Removing unused WHATSAPP_CTA_URL..."
for file in $(grep -rl 'import {.*WHATSAPP_CTA_URL' . || true); do
  if ! grep -q 'WHATSAPP_CTA_URL' "$file"; then
    sed -i 's/, WHATSAPP_CTA_URL//g; s/{ WHATSAPP_CTA_URL, /{ /g; s/{ WHATSAPP_CTA_URL }//g' "$file"
    echo "  Cleaned WHATSAPP_CTA_URL in $file"
  fi
done

# --- Step 4: Cleanup syntax ---
echo "🔍 Step 4: Tidying up import braces..."
find . -type f \( -name "*.ts" -o -name "*.tsx" \) \
  -exec sed -i 's/,  }/ }/g; s/{  }/ /g' {} +

# --- Git workflow ---
echo "📦 Step 5: Adding changes to Git..."
git add .

if git diff --cached --quiet; then
  echo "✅ No changes to commit."
else
  echo "📝 Step 6: Committing changes..."
  git commit -m "Chore: fix constants imports across project"

  echo "🚀 Step 7: Pushing to origin/$BRANCH..."
  git push origin "$BRANCH"
fi

echo "🎉 All done! Imports fixed, committed, and pushed to $BRANCH."
