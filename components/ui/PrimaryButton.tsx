import React, { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface PrimaryButtonProps {
  href: string;
  icon?: boolean;
  className?: string;
  children: ReactNode; // ✅ allow text or JSX children
}

export default function PrimaryButton({
  href,
  icon,
  className,
  children,
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition",
        className
      )}
    >
      {children}
      {icon && <span className="ml-2">→</span>}
    </Link>
  );
}


export default PrimaryButton;
