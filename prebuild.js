// prebuild.js
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.resolve(process.cwd(), ".env.local") });

const REQUIRED_ENV_VARS = [
  "NEXT_PUBLIC_APP_URL",
  "NEXT_PUBLIC_API_URL",
  "DATABASE_URL",
  "NEXT_PUBLIC_WHATSAPP_API",
];

const NODE_ENV = process.env.NODE_ENV || "development";
const isDev = NODE_ENV === "development";
const isStrict = NODE_ENV === "staging" || NODE_ENV === "production";

console.log(`🔍 Checking environment variables for ${NODE_ENV.toUpperCase()} build...`);

const missingVars = [];
const envLocalPath = path.resolve(process.cwd(), ".env.local");
const envExamplePath = path.resolve(process.cwd(), ".env.example");

// Ensure .env.local exists (for dev)
if (isDev && !fs.existsSync(envLocalPath)) {
  fs.writeFileSync(envLocalPath, "", "utf-8");
  console.log("🆕 Created empty .env.local file.");
}

// Ensure .env.example exists
if (!fs.existsSync(envExamplePath)) {
  fs.writeFileSync(envExamplePath, "", "utf-8");
  console.log("🆕 Created new .env.example file.");
}

// Load current example file
let envExampleContent = fs.readFileSync(envExamplePath, "utf-8").split("\n");

// Track if example updated
let exampleUpdated = false;

for (const key of REQUIRED_ENV_VARS) {
  const value = process.env[key];

  if (!value) {
    if (isDev) {
      console.warn(`⚠️  [DEV] Missing ${key}, using fallback ""`);
      process.env[key] = "";

      // Add placeholder to .env.local
      const localContent = fs.readFileSync(envLocalPath, "utf-8");
      if (!localContent.includes(`${key}=`)) {
        fs.appendFileSync(envLocalPath, `${key}=\n`);
        console.log(`➕ Added placeholder for ${key} in .env.local`);
      }
    } else if (isStrict) {
      missingVars.push(key);
    }
  }

  // Ensure .env.example always has the key
  if (!envExampleContent.some((line) => line.startsWith(`${key}=`))) {
    envExampleContent.push(`${key}=`);
    exampleUpdated = true;
    console.log(`📄 Synced placeholder for ${key} into .env.example`);
  }
}

// Rewrite .env.example if needed
if (exampleUpdated) {
  fs.writeFileSync(envExamplePath, envExampleContent.join("\n").trim() + "\n");
  console.log("✅ Updated .env.example with missing keys.");
}

// Fail in staging/prod if missing
if (isStrict && missingVars.length > 0) {
  console.error(
    `❌ Missing required environment variables for ${NODE_ENV.toUpperCase()}: ${missingVars.join(", ")}`
  );
  process.exit(1);
}

console.log("✅ Environment variable check passed.");
