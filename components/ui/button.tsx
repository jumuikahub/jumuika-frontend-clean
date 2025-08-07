// components/ui/button.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp: any = asChild ? "span" : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
          "bg-primary text-primary-foreground hover:opacity-90",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-60",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
