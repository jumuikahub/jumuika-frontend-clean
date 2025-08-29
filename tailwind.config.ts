import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#1E90FF", // lighter blue accent
          DEFAULT: "#0057B7", // Jumuika main blue
          dark: "#003F7F", // darker variant
        },
      },
    },
  },
  plugins: [],
};

export default config;
