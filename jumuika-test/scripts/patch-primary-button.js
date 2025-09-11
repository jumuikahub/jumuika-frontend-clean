#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const glob = require("glob");

const projectRoot = process.cwd();
const primaryButtonPath = path.join(projectRoot, "components/ui/PrimaryButton.tsx");
const canonicalImport = @/components/ui/PrimaryButton";

// 1. Fix PrimaryButton.tsx export
if (fs.existsSync(primaryButtonPath)) {
  let content = fs.readFileSync(primaryButtonPath, "utf8");

  if (!/export\s+default\s+PrimaryButton/.test(content)) {
    if (!/function\s+PrimaryButton/.test(content) && !/const\s+PrimaryButton/.test(content)) {
      console.error("❌ No PrimaryButton definition found in file. Aborting.");
      process.exit(1);
    }

    content += "\n\nexport default PrimaryButton;\n";
    fs.writeFileSync(primaryButtonPath, content, "utf8");
    console.log("✅ Added missing `export default PrimaryButton`.");
  } else {
    console.log("ℹ️ `export default PrimaryButton` already present.");
  }
} else {
  console.error(`❌ ${primaryButtonPath} not found. Check your repo structure.`);
  process.exit(1);
}

// 2. Fix imports across repo
const files = glob.sync("**/*.{ts,tsx,js,jsx}", {
  cwd: projectRoot,
  absolute: true,
  ignore: ["node_modules/**", ".next/**", "dist/**"],
});

let fixedCount = 0;

files.forEach((file) => {
  let text = fs.readFileSync(file, "utf8");
  let updated = text;

  // Common variations
  updated = updated.replace(/@\/components\/PrimaryButton/g, canonicalImport);
  updated = updated.replace(/..\/components\/PrimaryButton/g, canonicalImport);
  updated = updated.replace(/..\/components\/ui\/PrimaryButton/g, canonicalImport);

  if (updated !== text) {
    fs.writeFileSync(file, updated, "utf8");
    console.log(`🔧 Fixed imports in ${path.relative(projectRoot, file)}`);
    fixedCount++;
  }
});

console.log(`\n🎉 Done. Fixed imports in ${fixedCount} files.`);
