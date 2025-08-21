import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefbf3",
          100: "#d8f4e4",
          200: "#b5e8cc",
          300: "#87d7ae",
          400: "#58c48e",
          500: "#34b36f",
          600: "#259658",
          700: "#1e7747",
          800: "#195f3b",
          900: "#144e32",
        },
      },
      boxShadow: {
        soft:
          "0 1px 2px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
