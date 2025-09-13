// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // Jumuika blue
          light: "#3b82f6",
          dark: "#1e40af",
        },
        secondary: {
          DEFAULT: "#10b981", // Jumuika green
          light: "#34d399",
          dark: "#047857",
        },
        accent: {
          DEFAULT: "#f59e0b", // warm accent (orange/gold)
        },
      },
    },
  },
  plugins: [],
};

export default config;
