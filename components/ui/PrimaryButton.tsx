// components/ui/PrimaryCTAs.tsx
import Link from "next/link";
import constants from "@/lib/constants";
const { WHATSAPP_CTA_URL, WHATSAPP_BUY_URL } = constants;

export default function PrimaryCTAs() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4 justify-center">
      <Link href={WHATSAPP_CTA_URL} className="btn-primary">
        Book Services via WhatsApp
      </Link>
      <Link href={WHATSAPP_BUY_URL} className="btn-outline">
        Buy Items via WhatsApp
      </Link>
    </div>
  );
}
