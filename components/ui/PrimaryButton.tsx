// components/ui/PrimaryButton.tsx
import Link from "next/link";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & {
  variant?: "primary" | "outline";
  className?: string;
};

export default function PrimaryButton({
  children,
  variant = "primary",
  className = "",
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/40";
  const styles =
    variant === "primary"
      ? "bg-emerald-700 text-white hover:bg-emerald-800"
      : "border border-emerald-700 text-emerald-800 hover:bg-emerald-50";
  return (
    <Link {...rest} className={[base, styles, className].join(" ")} >
      {children}
    </Link>
  );
}
