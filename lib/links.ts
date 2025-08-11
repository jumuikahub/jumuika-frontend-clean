// lib/links.ts
// Central place to store and generate WhatsApp links

// Default WhatsApp number (editable in .env.local without touching code)
export const WHATSAPP =
  process.env.NEXT_PUBLIC_WHATSAPP || "254104250912";

/**
 * Returns a clickable WhatsApp link with an optional preset message.
 * @param preset - Message pre-filled in WhatsApp chat.
 */
export const waLink = (preset = "Hello Jumuika Hub KE") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(preset)}`;
