// components/ui/WhatsAppCTA.tsx
import Link from "next/link";
import constants from "@/lib/constants";

type ButtonVariant = "primary" | "outline";

interface Props {
  /** "primary" = solid brand button, "outline" = outline button  */
  variant?: ButtonVariant;
  /** extra utility classes if needed */
  className?: string;
  /** custom label (defaults to Book Services) */
  label?: string;
  /** override URL (defaults to WHATSAPP_CTA_URL) */
  href?: string;
}

export default function WhatsAppCTA({
  variant = "primary",
  className = "",
  label = "Book Services via WhatsApp",
  href,
}: Props) {
  const { WHATSAPP_CTA_URL } = constants;
  const base = variant === "primary" ? "btn-primary" : "btn-outline";

  return (
    <Link href={href ?? WHATSAPP_CTA_URL} className={`${base} ${className}`}>
      {label}
    </Link>
  );
}
