// prebuild.js
const fs = require("fs");
const path = require("path");

// Path to config
const configPath = path.resolve(__dirname, "disabled-modules.json");

// Load disabled modules
let disabledModules = [];
try {
  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
  disabledModules = config.disabledModules || [];
} catch (err) {
  console.error("⚠️ Failed to load disabled-modules.json:", err.message);
  process.exit(1);
}

// Apply your logic (example: deleting files, excluding from build, etc.)
disabledModules.forEach((module) => {
  const modulePath = path.resolve(__dirname, "node_modules", module);
  if (fs.existsSync(modulePath)) {
    console.log(`🚫 Disabling module: ${module}`);
    fs.rmSync(modulePath, { recursive: true, force: true });
  }
});

console.log("✅ Prebuild cleanup complete.");
