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

// Ensure .env.local exists (so we can append placeholders)
if (isDev && !fs.existsSync(envLocalPath)) {
  fs.writeFileSync(envLocalPath, "", "utf-8");
  console.log("🆕 Created empty .env.local file.");
}

for (const key of REQUIRED_ENV_VARS) {
  const value = process.env[key];

  if (!value) {
    if (isDev) {
      console.warn(`⚠️  [DEV] Missing ${key}, using fallback ""`);
      process.env[key] = ""; // fallback

      // Append placeholder to .env.local if not already present
      const currentContent = fs.readFileSync(envLocalPath, "utf-8");
      if (!currentContent.includes(`${key}=`)) {
        fs.appendFileSync(envLocalPath, `${key}=\n`);
        console.log(`➕ Added placeholder for ${key} in .env.local`);
      }
    } else if (isStrict) {
      missingVars.push(key);
    }
  }
}

// Fail in staging/prod if missing
if (isStrict && missingVars.length > 0) {
  console.error(
    `❌ Missing required environment variables for ${NODE_ENV.toUpperCase()}: ${missingVars.join(", ")}`
  );
  process.exit(1);
}

console.log("✅ Environment variable check passed.");
