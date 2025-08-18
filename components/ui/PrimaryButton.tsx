// components/ui/PrimaryButton.tsx
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // if you don't have a cn() helper, replace cn(...) with array join.

const button = cva(
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        solid:
          "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-600",
        outline:
          "ring-1 ring-emerald-600/30 text-emerald-700 hover:bg-emerald-50 focus-visible:ring-emerald-600",
      },
      block: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: { variant: "solid", block: false },
  }
);

type Props = VariantProps<typeof button> & {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function PrimaryButton({
  href,
  children,
  variant,
  block,
  className,
}: Props) {
  return (
    <Link href={href} className={cn(button({ variant, block }), className)}>
      {children}
    </Link>
  );
}
