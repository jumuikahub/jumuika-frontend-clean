import type { Metadata } from "next";
import "../globals.css"; // keep this relative to /app, not to this folder

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jumuika Hub KE",
  description:
    "WhatsApp-first smart business toolkit that connects vendors, institutions and students. Real-time commerce. No apps needed.",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main content grows to push footer to the bottom, and remains centered */}
      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
