// components/ui/WhatsAppCTA.tsx
import PrimaryButton from "./PrimaryButton";
import { WHATSAPP_CTA_URL } from "@/lib/constants";

export default function WhatsAppCTA({
  children = "Chat on WhatsApp",
  variant = "primary",
  className = "",
}: {
  children?: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}) {
  return (
    <PrimaryButton
      href={WHATSAPP_CTA_URL}
      target="_blank"
      variant={variant}
      className={className}
    >
      {children}
    </PrimaryButton>
  );
}
