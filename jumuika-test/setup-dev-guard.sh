#!/bin/bash
set -e

echo "🚀 Setting up development guardrails for Jumuika Hub frontend..."

# ----------------------------
# 1. ESLint config
# ----------------------------
cat > .eslintrc.json << 'EOF'
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": ".",
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": { "jsx": true }
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "no-restricted-syntax": [
      "error",
      {
        "selector": "MemberExpression[object.name='constants']",
        "message": "❌ Do not use 'constants.*'. Import directly from '@/lib/constants'."
      }
    ],
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/react-in-jsx-scope": "off"
  },
  "ignorePatterns": ["node_modules/", ".next/", "out/", "dist/", "*.config.js"]
}
EOF

# ----------------------------
# 2. Prettier config
# ----------------------------
cat > .prettierrc.json << 'EOF'
{
  "semi": true,
  "singleQuote": false,
  "printWidth": 100,
  "trailingComma": "es5",
  "tabWidth": 2,
  "endOfLine": "lf"
}
EOF

# ----------------------------
# 3. Git attributes for line endings
# ----------------------------
cat > .gitattributes << 'EOF'
* text=auto

*.js     text eol=lf
*.jsx    text eol=lf
*.ts     text eol=lf
*.tsx    text eol=lf
*.json   text eol=lf
*.yml    text eol=lf
*.yaml   text eol=lf
*.md     text eol=lf
*.css    text eol=lf
*.scss   text eol=lf

*.bat    text eol=crlf
*.cmd    text eol=crlf
EOF

# ----------------------------
# 4. GitHub Actions workflow
# ----------------------------
mkdir -p .github/workflows
cat > .github/workflows/ci.yml << 'EOF'
name: CI

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  build-and-lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: "npm"
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - run: npm test --if-present
EOF

# ----------------------------
# 5. Install dev dependencies
# ----------------------------
echo "📦 Installing ESLint + Prettier + Husky + lint-staged..."
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser husky lint-staged

# ----------------------------
# 6. Setup Husky hooks
# ----------------------------
npx husky install

# Pre-commit: fast checks
npx husky add .husky/pre-commit "npx lint-staged"

# Pre-push: full checks (slower)
npx husky add .husky/pre-push "npm run build && npm test --if-present"

# ----------------------------
# 7. lint-staged config
# ----------------------------
cat > lint-staged.config.js << 'EOF'
module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{json,css,scss,md}": ["prettier --write"]
};
EOF

# ----------------------------
# 8. Normalize line endings
# ----------------------------
echo "🔄 Normalizing line endings..."
git add --renormalize .
git commit -m "Chore: setup dev guardrails with pre-commit & pre-push hooks" || true

echo "✅ Setup complete! Pre-commit, pre-push, and CI guards are now active."
