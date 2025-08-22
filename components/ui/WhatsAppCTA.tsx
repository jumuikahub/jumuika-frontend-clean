"use client";

import Link from "next/link";
import { WHATSAPP_CTA_URL, BRAND } from "@/lib/constants";

export default function WhatsAppCTA() {
  return (
    <div className="mt-6">
      <Link
        href={WHATSAPP_CTA_URL}
        target="_blank"
        className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
      >
        Chat with {BRAND} on WhatsApp
      </Link>
    </div>
  );
}
