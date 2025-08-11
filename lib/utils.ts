// lib/utils.ts
/**
 * Builds a WhatsApp deep link using the public number.
 * Set NEXT_PUBLIC_WHATSAPP in `.env.local` (numbers only, e.g. 254104250912).
 * Defaults to the Jumuika number if not set.
 */
export function getWhatsAppUrl(message = "Hello Jumuika Hub KE") {
  const num =
    process.env.NEXT_PUBLIC_WHATSAPP?.replace(/[^\d]/g, "") || "254104250912";
  const text = encodeURIComponent(message);
  return `https://wa.me/${num}?text=${text}`;
}
