// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

// If your Navbar/Footer paths are different, adjust these two imports:
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: {
    default: "Jumuika Hub KE",
    template: "%s • Jumuika Hub KE",
  },
  description:
    "WhatsApp-first toolkit for vendors and students to connect, transact, and grow — no apps, no friction.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        {/* Page frame */}
        <div className="flex min-h-screen flex-col">
          {/* Global Navbar (appears once) */}
          <header className="border-b border-emerald-100 bg-white/80 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4">
              <Navbar />
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Global Footer (appears once) */}
          <footer className="mt-12 border-t border-emerald-100 bg-emerald-50/50">
            <div className="mx-auto max-w-7xl px-4">
              <Footer />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
