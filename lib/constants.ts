// lib/constants.ts
// Central place for brand copy + links.  Default export -> destructure where used.

const constants = {
  BRAND_NAME: "Jumuika Hub KE",
  TAGLINE:
    "WhatsApp-first smart business toolkit for vendors & institutions — simple listings, instant WhatsApp orders, and real-time engagement.",

  // CTAs (open WhatsApp)
  WHATSAPP_CTA_URL: "https://wa.me/254104250912", // ← put your primary number
  WHATSAPP_BUY_URL: "https://wa.me/254104250912?text=Hi!%20I%20want%20to%20buy",

  // Top navigation (left side)
  NAV_LINKS: [
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How it works" },
  ],

  // Footer columns
  FOOTER_LINKS: {
    company: [{ href: "/blog", label: "Blog" }],
    legal: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms & Conditions" },
    ],
  },
};

export default constants;
