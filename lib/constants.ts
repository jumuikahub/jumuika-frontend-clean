// lib/constants.ts
export const SITE_NAME = "Jumuika Hub KE";
export const SITE_TAGLINE =
  "WhatsApp-first smart business toolkit for vendors, institutions, and students.";

export const BRAND = {
  primary: "emerald", // Tailwind color family used across components
};

export const WHATSAPP_CTA_URL =
  "https://wa.me/254104250912?text=Hi%20Jumuika%20Hub%20KE%20%E2%80%94%20I%27d%20like%20to%20get%20started.";

/**
 * Navigation that should appear in the top navbar
 */
export const NAV_LINKS: { href: string; label: string }[] = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/blog", label: "Blog" },
];

/**
 * Footer links
 */
export const FOOTER_COMPANY = [{ href: "/blog", label: "Blog" }];
export const FOOTER_LEGAL = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms & Conditions" },
];
