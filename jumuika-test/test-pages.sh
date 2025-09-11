#!/bin/bash
# test-pages.sh
# Automated smoke test for key routes in local dev server

set -e

BASE_URL="http://localhost:3000"

PAGES=(
  "/"
  "/about"
  "/blog"
  "/how-it-works"
  "/terms"
)

echo "🚀 Running smoke tests against $BASE_URL"
echo "--------------------------------------"

for PAGE in "${PAGES[@]}"; do
  URL="$BASE_URL$PAGE"
  echo "🔍 Testing $URL ..."
  
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$URL")

  if [ "$STATUS" -eq 200 ]; then
    echo "   ✔ $PAGE returned 200 OK"
  else
    echo "   ❌ $PAGE returned $STATUS"
  fi
done

echo "✅ Smoke tests complete."
