// components/layout/Container.tsx
import { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export default function Container({ className = "", children }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
