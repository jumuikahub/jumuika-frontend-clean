import fs from "fs";
import path from "path";
import glob from "glob";

const projectRoot = process.cwd();

// Find all ts/tsx/js files
const files = glob.sync("**/*.{ts,tsx,js}", {
  cwd: projectRoot,
  ignore: ["node_modules/**", ".next/**"],
});

files.forEach((file) => {
  const filePath = path.join(projectRoot, file);
  let content = fs.readFileSync(filePath, "utf8");

  // ✅ Replace API calls in server code (heuristic: files under /app/api, /lib, /server)
  if (file.includes("/lib/") || file.includes("/server/") || file.includes("/app/api/")) {
    content = content.replace(
      /fetch\(["'`]\/api\//g,
      "fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/"
    );
  }

  // ⚡ Keep client-side calls relative (skip conversion for components/hooks)
  // → We only touch server-related files

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✔ Updated: ${file}`);
});

console.log("✨ API call paths normalized!");
