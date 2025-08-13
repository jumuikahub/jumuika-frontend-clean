// app/(site)/layout.tsx
import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jumuika Hub KE",
  description: "WhatsApp-first smart business toolkit",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col antialiased">
        <Navbar />
        {/* main grows to fill the available space, preventing a tall footer on short pages */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
