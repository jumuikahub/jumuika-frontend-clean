// lib/constants.ts
const constants = {
  BRAND: "Jumuika Hub KE",
  TAGLINE:
    "WhatsApp-first smart business toolkit for vendors & institutions — simple listings, instant WhatsApp orders, and real-time engagement.",

  // CTAs (replace with your real links)
  WHATSAPP_CTA_URL: "https://wa.me/254104250912?text=I%20want%20to%20book%20services",
  WHATSAPP_BUY_URL: "https://wa.me/254104250912?text=I%20want%20to%20buy%20items",

  NAV_LINKS: [
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/vendor-dashboard", label: "Vendor Dashboard" },
  ],
};

export default constants;
export type SiteConstants = typeof constants;
