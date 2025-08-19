import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#38BDF8", // Jumuika light blue
          DEFAULT: "#0284C7", // Jumuika main blue
          dark: "#0369A1", // Jumuika dark blue
        },
        accent: {
          light: "#FACC15", // yellow accent
          dark: "#CA8A04", // darker gold
        },
        neutral: {
          light: "#F3F4F6",
          dark: "#111827",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
