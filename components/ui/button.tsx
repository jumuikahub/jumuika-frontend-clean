// components/ui/button.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type CommonProps = {
  className?: string;
  children?: React.ReactNode;
};

// Use `as="a"` with `href` for links, or default <button> for actions.
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  CommonProps & { as?: "a"; href: string };

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  CommonProps & { as?: "button"; href?: never };

export type ButtonProps = AnchorProps | NativeButtonProps;

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ as = "button", className, children, ...rest }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
      "bg-blue-600 text-white hover:bg-blue-700",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600",
      "disabled:pointer-events-none disabled:opacity-60",
      className
    );

    if (as === "a") {
      const anchorProps = rest as AnchorProps;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    const buttonProps = rest as NativeButtonProps;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
