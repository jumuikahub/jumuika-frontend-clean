// skipTempModules.js
const fs = require("fs");
const path = require("path");

const TEMP_DIRS = [
  path.join(__dirname, "app", "(site)", "internlink-temp"),
  path.join(__dirname, "app", "(site)", "institutions-temp"),
];

TEMP_DIRS.forEach((dir) => {
  if (fs.existsSync(dir)) {
    const newPath = dir.replace("-temp", "-temp_disabled");
    fs.renameSync(dir, newPath);
    console.log(`🚫 Skipped module: renamed ${dir} -> ${newPath}`);
  }
});

console.log("✅ All temp modules disabled for build!");
