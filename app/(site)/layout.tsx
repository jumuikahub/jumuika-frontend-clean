// app/(site)/layout.tsx
import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: BRAND.name,
  description: BRAND.tagline,
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-16">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
