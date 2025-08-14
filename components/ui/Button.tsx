import * as React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button' | 'a';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ as = 'button', className = '', ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm ' +
      'transition-all ring-1 ring-inset ring-emerald-700/15 bg-emerald-700 text-white hover:bg-emerald-800 ' +
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 disabled:opacity-50';

    if (as === 'a') {
      // @ts-expect-error allowing button props on anchor when used as link-like button
      return <a ref={ref as any} className={`${base} ${className}`} {...props} />;
    }
    return <button ref={ref} className={`${base} ${className}`} {...props} />;
  }
);

Button.displayName = 'Button';
