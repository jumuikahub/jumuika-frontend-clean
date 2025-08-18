// components/ui/PrimaryButton.tsx
import Link from "next/link";
import { WHATSAPP_CTA_URL } from "@/lib/constants";
import { cva } from "class-variance-authority";
import clsx from "clsx";

const button = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      intent: {
        primary:
          "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-600",
        outline:
          "border border-emerald-600 text-emerald-700 hover:bg-emerald-50 focus:ring-emerald-600",
        ghost:
          "text-emerald-700 hover:bg-emerald-50 focus:ring-emerald-600",
      },
      size: {
        md: "px-5 py-3 text-sm",
        lg: "px-6 py-3.5 text-base",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
);

type Props = {
  label: string;
  href?: string;
  intent?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
  target?: "_blank";
};

export default function PrimaryButton({
  label,
  href,
  intent,
  size,
  className,
  target,
}: Props) {
  const url = href ?? WHATSAPP_CTA_URL;
  return (
    <Link
      href={url}
      target={target}
      className={clsx(button({ intent, size }), className)}
    >
      {label}
    </Link>
  );
}
