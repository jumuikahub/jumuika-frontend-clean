// components/Container.tsx
import { ReactNode } from "react";
import clsx from "clsx";

type Props = { children: ReactNode; className?: string };

export default function Container({ children, className }: Props) {
  // One place to set site-wide readable line length & side padding
  return (
    <div className={clsx("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
