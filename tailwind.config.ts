// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16a34a",   // emerald-600
        secondary: "#065f46", // emerald-800-ish (deep)
        accent: "#fbbf24",    // amber-400
      },
      borderRadius: {
        xl: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
