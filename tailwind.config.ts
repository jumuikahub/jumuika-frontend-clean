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
        brand: {
          50:  "#eaf8ef",
          100: "#d8f1e1",
          200: "#b6e4c7",
          300: "#8fd6ab",
          400: "#68c78f",
          500: "#44b973",
          600: "#2da95f", // primary
          700: "#24864c",
          800: "#1c683c",
          900: "#154e2e",
        },
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
