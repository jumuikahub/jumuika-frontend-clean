// lib/constants.ts

// EDIT these two URLs if you need different WhatsApp links
const WHATSAPP_CTA_URL = "https://wa.me/254000000000"; // Vendors/services CTA
const WHATSAPP_BUY_URL = "https://wa.me/254000000000"; // Buyers CTA

const BRAND_NAME = "Jumuika Hub KE";
const BRAND_TAGLINE =
  "WhatsApp-first toolkit helping vendors and students connect and transact — real-time, no apps.";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "How it works", href: "/how-it-works" },
  // NOTE: Blog intentionally omitted from navbar (kept in footer only)
];

const FOOTER_LINKS = {
  company: [{ label: "Blog", href: "/blog" }],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

const constants = {
  BRAND_NAME,
  BRAND_TAGLINE,
  WHATSAPP_CTA_URL,
  WHATSAPP_BUY_URL,
  // convenience aliases some components expect
  BRAND: BRAND_NAME,
  TAGLINE: BRAND_TAGLINE,
  WHATSAPP_CTA: WHATSAPP_CTA_URL,

  NAV_LINKS,
  FOOTER_LINKS,
};

export default constants;
