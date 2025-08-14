import * as React from 'react';

type CommonProps = {
  variant?: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode;
};

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;             // when href is present we render <a>
};

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

export type ButtonProps = CommonProps & (AnchorProps | NativeButtonProps);

const base =
  'inline-flex items-center justify-center rounded-lg px-6 py-3 text-[15px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
const styles = {
  primary:
    'bg-emerald-700 text-white hover:bg-emerald-800 focus:ring-emerald-600',
  secondary:
    'bg-white text-emerald-800 ring-1 ring-emerald-200 hover:bg-emerald-50 focus:ring-emerald-600',
};

export default function Button({
  variant = 'primary',
  className,
  children,
  ...rest
}: ButtonProps) {
  const cls = `${base} ${styles[variant]} ${className ?? ''}`;

  if ('href' in rest && typeof rest.href === 'string') {
    const { href, ...anchorRest } = rest;
    return (
      <a href={href} className={cls} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(rest as NativeButtonProps)}>
      {children}
    </button>
  );
}
