// components/ui/Button.tsx
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  ReactNode,
  Ref,
} from "react";
import clsx from "clsx";

/** ----- Variants & sizing (tweak styles as you like) ----- */
type Variant = "primary" | "outline";
type Size = "md" | "lg";

function baseClasses(variant: Variant, size: Size) {
  const v =
    variant === "outline"
      ? "border border-emerald-700 text-emerald-800 hover:bg-emerald-50"
      : "bg-emerald-800 text-white hover:bg-emerald-700";

  const s = size === "lg" ? "px-6 py-3 text-base" : "px-5 py-2.5 text-sm";
  return clsx(
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50",
    v,
    s
  );
}

/** ----- Common props shared by both modes ----- */
type CommonProps = {
  children?: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

/** ----- Discriminated union for clean typing ----- */
type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    as?: "button";
    href?: never; // prevent href on real <button>
  };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    as: "a";
    href: string; // required for anchor
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/** ----- Component ----- */
const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const { children, className, variant = "primary", size = "md", ...rest } = props as ButtonProps;

  const classes = clsx(baseClasses(variant, size), className);

  if ((rest as ButtonAsAnchor).as === "a") {
    // Anchor branch – only spread anchor-safe props
    const { href, ...anchorRest } = rest as ButtonAsAnchor;
    return (
      <a ref={ref as Ref<HTMLAnchorElement>} href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  // Button branch – only spread button-safe props
  const buttonRest = rest as ButtonAsButton;
  return (
    <button ref={ref as Ref<HTMLButtonElement>} className={classes} {...buttonRest}>
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
