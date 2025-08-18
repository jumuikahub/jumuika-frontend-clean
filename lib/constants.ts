// lib/constants.ts

// Site
export const SITE_NAME = "Jumuika Hub KE";

// WhatsApp phone (E.164 without + for wa.me)
export const WHATSAPP_PHONE_E164 = "254104250912";

// Canonical CTA URL used across the site
export const WHATSAPP_CTA_URL = `https://wa.me/${WHATSAPP_PHONE_E164}`;

// Back-compat alias: some files may import WHATSAPP_CTA.
// Keeping this avoids build breaks without changing any pages.
export const WHATSAPP_CTA = WHATSAPP_CTA_URL;

// Optional shared labels
export const CTA_TEXT_BOOK = "Book Services via WhatsApp";
export const CTA_TEXT_BUY = "Buy Items via WhatsApp";
