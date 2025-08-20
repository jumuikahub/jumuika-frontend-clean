// lib/constants.ts
const constants = {
  BRAND_NAME: "Jumuika Hub KE",
  TAGLINE:
    "WhatsApp-first smart business toolkit for vendors & institutions — simple listings, instant WhatsApp orders, and real-time engagement.",
  WHATSAPP_CTA_URL:
    "https://wa.me/254104250912", // ← put your bookings/chat # here
  WHATSAPP_BUY_URL:
    "https://wa.me/254104250912?text=Hi%20I%20want%20to%20buy", // ← put your buying/chat # here
  LOGO_PATH: "/logo.png", // optional; falls back to text if missing
  NAV_LINKS: [
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/vendor-dashboard", label: "Vendor Dashboard" },
  ],
  FOOTER_LINKS: {
    company: [{ href: "/blog", label: "Blog" }],
    legal: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms & Conditions" },
    ],
  },
} as const;

export default constants;
export type AppConstants = typeof constants;
