// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  {
    ignores: [
      "node_modules",
      "dist",
      "build",
      ".next",
      "coverage",
      "*.cjs", // infra scripts
    ],
  },

  // Base JS/TS configs
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: reactPlugin,
      "react-hooks": reactHooks,
      prettier,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      // Core TS rules
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn", // apply strict only to frontend, not infra
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // React
      "react/react-in-jsx-scope": "off", // Next.js handles React in scope
      "react/prop-types": "off", // using TS for props
      "react/jsx-uses-react": "off",

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Prettier integration
      "prettier/prettier": "error",

      // Accessibility
      "jsx-a11y/alt-text": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Infra overrides (scripts, config, .cjs files)
  {
    files: [
      "scripts/**/*.{js,cjs,mjs,ts}",
      "*.cjs",
      "check-setup.cjs",
      "setup-fresh-clone.cjs",
      "prebuild.cjs",
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // infra can use 'any'
    },
  },
];
