// app/(site)/layout.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jumuika Hub KE – WhatsApp-First Smart Business Toolkit",
  description:
    "Connect vendors, institutions, and students seamlessly. Real-time commerce. No apps needed.",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      {/* main grows. You can add page-wide backgrounds here or inside pages */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
