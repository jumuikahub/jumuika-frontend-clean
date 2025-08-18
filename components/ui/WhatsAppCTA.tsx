// components/ui/WhatsAppCTA.tsx
import { WHATSAPP_CTA_URL } from "@/lib/constants";
import PrimaryButton from "./PrimaryButton";

type IncomingVariant = "primary" | "solid" | "outline";
type ButtonVariant = "solid" | "outline";

const mapVariant = (v: IncomingVariant | undefined): ButtonVariant =>
  v === "outline" ? "outline" : "solid"; // treat "primary" as "solid"

type Props = {
  /** You may still pass "primary" from older code; it will be mapped to "solid". */
  variant?: IncomingVariant;
  className?: string;
  children?: React.ReactNode;
};

export default function WhatsAppCTA({
  variant = "solid",
  className,
  children = "Chat on WhatsApp",
}: Props) {
  return (
    <PrimaryButton
      href={WHATSAPP_CTA_URL}
      variant={mapVariant(variant)}
      className={className}
    >
      {children}
    </PrimaryButton>
  );
}
