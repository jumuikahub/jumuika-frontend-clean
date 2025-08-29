"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

type PrimaryButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export default function PrimaryButton({
  children,
  href,
  onClick,
  className,
  disabled,
}: PrimaryButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed";

  if (href) {
    // Link mode
    return (
      <Link
        href={href}
        className={cn(baseClasses, className)}
      >
        {children}
      </Link>
    );
  }

  // Action mode (button)
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(baseClasses, className)}
    >
      {children}
    </button>
  );
}
