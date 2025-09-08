"use client";

import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  // No ThemeProvider, just return children directly
  return <>{children}</>;
}
