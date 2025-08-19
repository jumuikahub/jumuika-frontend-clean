// lib/constants.ts
export const BRAND = {
  name: "Jumuika Hub KE",
  tagline:
    "WhatsApp-first smart business toolkit for vendors and students — real-time, no apps.",
} as const;

// Single WhatsApp number (do not change format in the href)
export const WHATSAPP_CTA_URL =
  "https://wa.me/254104250912?text=Hi%20Jumuika%20Hub%20KE%2C%20I%27d%20like%20to%20get%20started.";

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  // Blog is footer-only by request; omit from Navbar
] as const;

export const FOOTER_LINKS = {
  company: [{ href: "/blog", label: "Blog" }],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
} as const;
