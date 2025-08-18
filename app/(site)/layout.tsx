// app/(site)/layout.tsx
import type { ReactNode } from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import "../globals.css";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-white text-zinc-900">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
