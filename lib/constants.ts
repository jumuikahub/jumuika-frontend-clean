// lib/constants.ts

export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type FooterGroups = {
  company: NavLink[];
  legal: NavLink[];
};

// ---------- Brand & messaging ----------
export const BRAND_NAME = "Jumuika Hub KE";

// Paraphrased (no InternLink / institutions mention)
export const BRAND_TAGLINE =
  "WhatsApp-first toolkit helping vendors and students connect and transact — real-time, no apps.";

// Some pages/components expect an object with .name/.tagline
export const BRAND = {
  name: BRAND_NAME,
  tagline: BRAND_TAGLINE,
};

// ---------- CTAs ----------
export const WHATSAPP_CTA_URL =
  "https://wa.me/254XXXXXXXX"; // edit to your number
export const WHATSAPP_BUY_URL =
  "https://wa.me/254XXXXXXXX?text=Hi%20I%20want%20to%20buy"; // optional

// ---------- Navigation ----------
/**
 * Navbar: keep only the items you want visible in the header.
 * (Per requirement: Blog should NOT be in the navbar.)
 */
export const NAV_LINKS: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
];

// ---------- Footer ----------
export const FOOTER_LINKS: FooterGroups = {
  company: [{ href: "/blog", label: "Blog" }],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
};

// ---------- Default export for the new import style ----------
export default {
  BRAND_NAME,
  BRAND_TAGLINE,
  BRAND,
  WHATSAPP_CTA_URL,
  WHATSAPP_BUY_URL,
  NAV_LINKS,
  FOOTER_LINKS,

  // Back-compat keys some files may still reference
  TAGLINE: BRAND_TAGLINE,
  WHATSAPP_CTA: WHATSAPP_CTA_URL,
};
