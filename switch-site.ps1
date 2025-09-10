Write-Host "🔄 Switching (site-clean) → (site)..."

# Step 1: Backup existing (site)
if (Test-Path "app/(site)") {
    Rename-Item -Path "app/(site)" -NewName "(site-backup)" -Force
    Write-Host "📦 Current (site) moved to (site-backup)."
}

# Step 2: Try to promote (site-clean) → (site)
if (Test-Path "app/(site-clean)") {
    Rename-Item -Path "app/(site-clean)" -NewName "(site)" -Force
    Write-Host "✅ (site-clean) promoted to (site)."
} else {
    Write-Host "❌ ERROR: app/(site-clean) does not exist. Rolling back..."
    if (Test-Path "app/(site-backup)") {
        Rename-Item -Path "app/(site-backup)" -NewName "(site)" -Force
        Write-Host "↩️ Rollback complete. Original (site) restored."
    }
    exit 1
}

Write-Host "🎉 Switch complete!"
