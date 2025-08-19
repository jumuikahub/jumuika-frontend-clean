// lib/constants.ts

/**
 * Global brand + CTA constants used across pages.
 * Keep these as simple string constants so they tree-shake well in Next.js.
 */

// ---- Brand ----
export const BRAND_NAME = "Jumuika Hub KE";

// Short, current tagline (no Institutions / InternLink mentions)
export const BRAND_TAGLINE =
  "WhatsApp-first smart business toolkit for vendors and students — real-time, no apps.";

// ---- CTAs ----
/**
 * One WhatsApp entry point you can reuse for all CTAs.
 * Replace the number below with your production number/wa.me link.
 */
export const WHATSAPP_CTA_URL = "https://wa.me/254XXXXXXXXX";

// Optional: a second CTA for buying/marketplace if you want different flows.
export const WHATSAPP_BUY_URL = WHATSAPP_CTA_URL;

// ---- Legacy aliases (safe for older imports) ----
/** Some files might still import BRAND; keep a friendly alias. */
export const BRAND = BRAND_NAME;
/** Older code might import TAGLINE. */
export const TAGLINE = BRAND_TAGLINE;
/** Older code might have used WHATSAPP_CTA. */
export const WHATSAPP_CTA = WHATSAPP_CTA_URL;

// Default export (handy in some places, but not required)
export default {
  BRAND_NAME,
  BRAND_TAGLINE,
  WHATSAPP_CTA_URL,
  WHATSAPP_BUY_URL,
  BRAND,
  TAGLINE,
  WHATSAPP_CTA,
};
