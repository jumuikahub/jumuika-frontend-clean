import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jumuika Hub KE – WhatsApp-First Smart Business Toolkit",
  description:
    "Connect vendors, institutions, and students seamlessly. Real-time commerce. No apps needed.",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Whole page gets the soft diagonal emerald gradient */}
      <body className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_0%,_rgba(16,185,129,0.08),_transparent_70%),linear-gradient(180deg,_rgba(16,185,129,0.06)_0%,_rgba(16,185,129,0.08)_30%,_transparent_70%)] text-slate-900 antialiased">
        {/* Sticky footer layout */}
        <div className="flex min-h-screen flex-col">
          <Navbar />
          {/* This grows to fill available space, preventing huge empty areas */}
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
