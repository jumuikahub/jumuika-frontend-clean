// prebuild.js
const fs = require("fs");
require("dotenv").config({ path: ".env.local" });

console.log("🔍 Checking environment variables for PRODUCTION build...");

const requiredEnvs = [
  "WHATSAPP_API_TOKEN",
  "WHATSAPP_BUSINESS_ACCOUNT_ID",
  "WHATSAPP_PHONE_NUMBER_ID",
  "NEXT_PUBLIC_APP_URL",
  "DATABASE_URL",
];

let missing = [];

requiredEnvs.forEach((key) => {
  if (!process.env[key]) {
    missing.push(key);
  } else {
    // Ensure .env.example has placeholders for future devs
    const example = fs.readFileSync(".env.example", "utf8");
    if (!example.includes(key)) {
      fs.appendFileSync(".env.example", `\n${key}=# add your ${key}`);
      console.log(`📄 Synced placeholder for ${key} into .env.example`);
    }
  }
});

if (missing.length > 0) {
  console.error(`❌ Missing required environment variables for PRODUCTION: ${missing.join(", ")}`);
  process.exit(1);
} else {
  console.log("✅ All required environment variables are set.");
}
