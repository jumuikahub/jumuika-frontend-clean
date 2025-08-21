import Link from "next/link";
import constants from "@/lib/constants";

type ButtonVariant = "primary" | "outline";

type Props = {
  variant?: ButtonVariant;
  className?: string;
  label?: string;
  href?: string; // optional override
};

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
