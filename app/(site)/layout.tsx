import "../globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Jumuika Hub KE",
  description: "WhatsApp-First SaaS Business Toolkit for Kenya",
  keywords: ["WhatsApp Business", "Kenya", "Jumuika", "M-Pesa", "SaaS", "Marketplace"],
  openGraph: {
    title: "Jumuika Hub KE",
    description: "Run your business directly on WhatsApp – bookings, payments, referrals, and more.",
    url: "https://jumuikahub.vercel.app",
    siteName: "Jumuika Hub KE",
    locale: "en_KE",
    type: "website",
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
