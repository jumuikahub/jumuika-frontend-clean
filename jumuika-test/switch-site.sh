#!/bin/bash
set -e

echo "🔄 Switching (site-clean) → (site)..."

# Step 1: Backup existing (site) if it exists
if [ -d "app/(site)" ]; then
  mv app/(site) app/(site-backup)
  echo "📦 Current (site) moved to (site-backup)."
fi

# Step 2: Try to promote (site-clean) → (site)
if [ -d "app/(site-clean)" ]; then
  mv app/(site-clean) app/(site)
  echo "✅ (site-clean) promoted to (site)."
else
  echo "❌ ERROR: app/(site-clean) does not exist. Rolling back..."
  if [ -d "app/(site-backup)" ]; then
    mv app/(site-backup) app/(site)
    echo "↩️ Rollback complete. Original (site) restored."
  fi
  exit 1
fi

echo "🎉 Switch complete!"
