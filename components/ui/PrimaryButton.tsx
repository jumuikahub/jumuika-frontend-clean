// components/ui/PrimaryButton.tsx

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded-2xl font-medium transition-all focus:outline-none",
          variant === "default" &&
            "bg-blue-600 text-white hover:bg-blue-700 shadow",
          variant === "outline" &&
            "border border-blue-600 text-blue-600 hover:bg-blue-50",
          variant === "ghost" && "text-blue-600 hover:bg-blue-100",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";

// ✅ Default export so you don’t need to refactor all imports
export default PrimaryButton;
