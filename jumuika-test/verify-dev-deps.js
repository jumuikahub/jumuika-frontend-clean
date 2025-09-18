const { execSync } = require("child_process");
const pkg = require("./package.json");

const required = [
  "@babel/preset-env",
  "@babel/preset-react",
  "@babel/preset-typescript",
  "babel-jest",
  "ts-jest",
  "@testing-library/react",
  "@testing-library/jest-dom",
  "jest",
];

console.log("🔍 Verifying required devDependencies...");

let missing = [];
for (const dep of required) {
  try {
    require.resolve(dep);
  } catch {
    missing.push(dep);
  }
}

if (missing.length > 0) {
  console.log(`⚠️ Missing devDependencies: ${missing.join(", ")}`);
  console.log("📦 Installing missing devDependencies...");
  execSync(`npm install --save-dev ${missing.join(" ")}`, { stdio: "inherit" });
} else {
  console.log("✅ All required devDependencies present.");
}
