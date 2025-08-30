// components/ui/PrimaryButton.tsx
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils"; // adjust path if your utils is elsewhere
import { ArrowRight } from "lucide-react";
import React from "react";

interface PrimaryButtonProps {
  label: string;             // <-- added to match usage
  href?: string;
  icon?: boolean;
  className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  href,
  icon,
  className,
}) => {
  const buttonContent = (
    <span
      className={cn(
        "inline-flex items-center px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors",
        className
      )}
    >
      {label}
      {icon && <ArrowRight className="ml-2 h-4 w-4" />}
    </span>
  );

  // If href exists, render as Next.js Link
  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  // Otherwise, render as button
  return <button type="button">{buttonContent}</button>;
};
