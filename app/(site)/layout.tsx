// app/(site)/layout.tsx
import "@/app/globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import type { ReactNode } from "react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-slate-900 antialiased">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
