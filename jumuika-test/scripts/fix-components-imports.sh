#!/bin/bash
# scripts/fix-components-imports.sh
# Auto-fix any lingering `@/components/button` imports to unified `@/components`.

set -euo pipefail

BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "📌 Branch: $BRANCH"

echo "🔍 Scanning for '@/components/button' imports..."
FILES=$(grep -rl '@/components/button' . || true)

if [ -z "$FILES" ]; then
  echo "✅ No stale '@/components/button' imports found."
  exit 0
fi

for file in $FILES; do
  echo "🛠️  Fixing $file"
  sed -i 's|@/components/button|@/components|g' "$file"
done

git add $FILES

if git diff --cached --quiet; then
  echo "✅ No changes staged."
else
  git commit -m "Fix: unify all '@/components/button' imports to '@/components'"
  git push origin "$BRANCH"
  echo "🚀 Fixes committed and pushed."
fi

echo "🎉 All '@/components/button' imports replaced with '@/components'."
