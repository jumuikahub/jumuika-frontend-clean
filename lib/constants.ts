// lib/constants.ts

// Site
export const SITE_NAME = "Jumuika Hub KE";

// WhatsApp phone (E.164 without + for wa.me)
export const WHATSAPP_PHONE_E164 = "254104250912";

// Canonical CTA URL used across the site
export const WHATSAPP_CTA_URL = `https://wa.me/${WHATSAPP_PHONE_E164}`;

// ---- Back-compat alias ----
// Some pages import WHATSAPP_CTA instead of WHATSAPP_CTA_URL.
// Export both so the build doesn’t break.
export const WHATSAPP_CTA = WHATSAPP_CTA_URL;

// Optional: shared CTA labels (use as needed)
export const CTA_TEXT_BOOK = "Book Services via WhatsApp";
export const CTA_TEXT_BUY = "Buy Items via WhatsApp";
