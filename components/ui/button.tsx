import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/cn"; // tiny helper: cn(...classes) -> string (or replace with your own)

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-base font-medium transition-colors shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-emerald-700 text-white hover:bg-emerald-800 focus-visible:outline-emerald-600",
        secondary:
          "bg-white text-emerald-900 ring-1 ring-emerald-300/70 hover:bg-emerald-50 focus-visible:outline-emerald-600",
        ghost:
          "bg-transparent text-emerald-800 hover:bg-emerald-50 focus-visible:outline-emerald-600",
      },
      size: {
        md: "px-5 py-3",
        lg: "px-6 py-4 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonBase = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;
type ButtonLink = React.ComponentProps<typeof Link> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonBase) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export function ButtonLink({ className, variant, size, ...props }: ButtonLink) {
  return <Link className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
