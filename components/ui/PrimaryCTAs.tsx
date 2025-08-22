"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { WHATSAPP_CTA_URL, WHATSAPP_BUY_URL } from "@/lib/constants";

type Props = { className?: string };

function ButtonLink({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600";
  const style =
    variant === "solid"
      ? "bg-emerald-600 text-white hover:bg-emerald-700"
      : "ring-1 ring-inset ring-emerald-600/40 text-emerald-700 hover:bg-emerald-50";
  return (
    <Link href={href} className={cn(base, style, className)}>
      {children}
    </Link>
  );
}

/** Renders the two hero CTAs with consistent spacing everywhere */
export default function PrimaryCTAs({ className }: Props) {
  return (
    <div className={cn("flex flex-wrap items-center gap-4", className)}>
      <ButtonLink href={WHATSAPP_CTA_URL} variant="solid" aria-label="Book services via WhatsApp">
        Book Services via WhatsApp
      </ButtonLink>
      <ButtonLink href={WHATSAPP_BUY_URL} variant="outline" aria-label="Buy items via WhatsApp">
        Buy Items via WhatsApp
      </ButtonLink>
    </div>
  );
}
