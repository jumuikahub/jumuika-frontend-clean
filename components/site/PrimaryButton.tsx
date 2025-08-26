import Link from "next/link"
import { WHATSAPP_CTA_URL, WHATSAPP_BUY_URL } from "@/lib/constants"

export default function PrimaryButton({ className = "" }: { className?: string }) {
  return (
    <div className={`mt-8 flex flex-wrap items-center gap-4 justify-center ${className}`}>
      <Link href={WHATSAPP_CTA_URL} className="btn-primary">
        Book Services via WhatsApp
      </Link>
      <Link href={WHATSAPP_BUY_URL} className="btn-outline">
        Buy Items via WhatsApp
      </Link>
    </div>
  )
}
