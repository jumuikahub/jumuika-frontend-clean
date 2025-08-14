// components/ui/Button.tsx
import * as React from 'react';
import clsx from 'clsx';

/**
 * A small polymorphic Button that can render as:
 *  - <button> (default) with full button props
 *  - <a> with full anchor props (href, target, rel...)
 */
type CommonProps = {
  as?: 'button' | 'a';
  className?: string;
  children?: React.ReactNode;
};

export type ButtonProps =
  CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const base =
  'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold ' +
  'transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' +
  'bg-emerald-700 text-white hover:bg-emerald-800 focus-visible:ring-emerald-600';

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button({ as = 'button', className, children, ...rest }, ref) {
  if (as === 'a') {
    // Anchor variant (accepts href, target, rel, etc.)
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={clsx(base, className)}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  // Button variant
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={clsx(base, className)}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
});
