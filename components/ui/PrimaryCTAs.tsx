// components/ui/PrimaryCTAs.tsx
import Link from "next/link";
import { BRAND, TAGLINE, WHATSAPP_CTA_URL, WHATSAPP_BUY_URL } from "@/lib/constants";

export default function PrimaryCTAs() {
  return (
    <div className="flex gap-4">
      <Link
        href={WHATSAPP_CTA_URL}
        className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
      >
        {BRAND} on WhatsApp
      </Link>

      <Link
        href={WHATSAPP_BUY_URL}
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
      >
        Buy Now
      </Link>
    </div>
  );
}
