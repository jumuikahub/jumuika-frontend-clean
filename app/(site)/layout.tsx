// app/(site)/layout.tsx
import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jumuika Hub KE – WhatsApp‑First Smart Business Toolkit",
  description:
    "Connect vendors, institutions, and students seamlessly. Real‑time commerce. No apps needed.",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {/* Sticky layout wrapper */}
        <div className="flex min-h-screen flex-col">
          <Navbar />
          {/* main grows to push footer down on tall screens, keeps footer small on short pages */}
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
