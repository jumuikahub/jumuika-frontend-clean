#!/bin/bash
# clean-build.sh
# Atomic script to reorganize inactive modules and ensure a clean Next.js build

set -e  # Stop immediately if any command fails

echo "✅ Starting repo cleanup and build process..."

# 1. Ensure top-level modules folder exists
mkdir -p modules
echo "📁 modules/ folder ensured."

# 2. Move inactive modules out of app/
INACTIVE_FOLDERS=("internlink-temp_disabled" "institutions-temp_disabled" "manager")

for folder in "${INACTIVE_FOLDERS[@]}"; do
    if [ -d "app/(site)/$folder" ]; then
        git mv "app/(site)/$folder" "modules/${folder/_temp_disabled/_disabled}"
        echo "📦 Moved $folder → modules/${folder/_temp_disabled/_disabled}"
    else
        echo "⚠️  Folder app/(site)/$folder not found, skipping..."
    fi
done

# 3. Stage and commit changes
git add .
git commit -m "Reorganize repo: move inactive modules out of app for clean build" || echo "ℹ️ No changes to commit."
git push origin main
echo "🚀 Git changes pushed."

# 4. Run local build
echo "🔧 Running npm install to ensure dependencies..."
npm install

echo "🏗️ Building project..."
npm run build

echo "✅ Repo reorganized and build completed successfully!"
