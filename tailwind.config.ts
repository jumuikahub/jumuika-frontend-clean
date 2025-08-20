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
        brand: {
          50: "#EBFAF1",
          100: "#D6F5E3",
          200: "#AEEBC8",
          300: "#86E1AC",
          400: "#5ED791",
          500: "#36CD75",
          600: "#16A34A",
          700: "#12833B",
          800: "#0E632C",
          900: "#0A421E",
        },
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
