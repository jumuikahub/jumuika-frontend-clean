// disableTempModules.js
const fs = require("fs");
const path = require("path");

const TEMP_FOLDERS = [
  path.join(__dirname, "app", "(site)", "internlink-temp_disabled"),
  path.join(__dirname, "app", "(site)", "institutions-temp_disabled"),
];

TEMP_FOLDERS.forEach((folder) => {
  if (!fs.existsSync(folder)) return;

  const pageFile = path.join(folder, "page.tsx");
  if (fs.existsSync(pageFile)) {
    let content = fs.readFileSync(pageFile, "utf8");
    if (!content.startsWith("// TEMP DISABLED")) {
      content = `// TEMP DISABLED: excluded from build\n/*\n${content}\n*/\n`;
      fs.writeFileSync(pageFile, content, "utf8");
      console.log(`🚫 Disabled route: ${pageFile}`);
    }
  }

  // Also disable nested pages (like onboard/page.tsx)
  const onboardPage = path.join(folder, "onboard", "page.tsx");
  if (fs.existsSync(onboardPage)) {
    let onboardContent = fs.readFileSync(onboardPage, "utf8");
    if (!onboardContent.startsWith("// TEMP DISABLED")) {
      onboardContent = `// TEMP DISABLED: excluded from build\n/*\n${onboardContent}\n*/\n`;
      fs.writeFileSync(onboardPage, onboardContent, "utf8");
      console.log(`🚫 Disabled nested route: ${onboardPage}`);
    }
  }
});

console.log("✅ All unfinished modules excluded from Next.js build.");
