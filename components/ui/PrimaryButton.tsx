import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  asChild?: boolean; // NEW
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, variant = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const baseClasses =
      "px-4 py-2 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";

    const variants: Record<string, string> = {
      default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-400",
      ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500",
    };

    return (
      <Comp ref={ref as any} className={cn(baseClasses, variants[variant], className)} {...props} />
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
