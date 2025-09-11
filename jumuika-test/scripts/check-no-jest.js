// scripts/check-no-jest.js
const fs = require("fs");

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

let found = false;
let issues = [];

// 1. Root-level "jest" key
if (pkg.jest) {
  found = true;
  issues.push("Root-level 'jest' key exists in package.json");
}

// 2. Check dependencies and devDependencies for "jest"
["dependencies", "devDependencies"].forEach((section) => {
  if (pkg[section]) {
    Object.keys(pkg[section]).forEach((dep) => {
      if (dep.toLowerCase().includes("jest")) {
        found = true;
        issues.push(`'${dep}' found in ${section}`);
      }
    });
  }
});

if (found) {
  console.error("❌ CI safeguard failed: Jest references detected in package.json:");
  issues.forEach((i) => console.error("  - " + i));
  process.exit(1);
} else {
  console.log("✅ CI safeguard passed: no Jest config or dependencies in package.json.");
}
