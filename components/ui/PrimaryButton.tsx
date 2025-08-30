"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string; // allow label
  href?: string;
  icon?: boolean;
}

const PrimaryButton = ({
  label,
  href,
  icon,
  className,
  children,
  ...props
}: PrimaryButtonProps) => {
  const content = (
    <>
      {icon && <span className="mr-2">🚀</span>}
      {label || children}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors",
          className
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors",
        className
      )}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;
