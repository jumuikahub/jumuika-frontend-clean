import type { Metadata } from "next";
import { generateMetadata } from "@/components/site/SEO";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = generateMetadata({
  title: "Jumuika Hub KE – WhatsApp-First SaaS Business Toolkit",
  description:
    "Run your business on WhatsApp – bookings, payments, referrals, and more with Jumuika Hub KE.",
  url: "https://jumuikahub.com",
  image: "https://jumuikahub.com/og-image.png",
});

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar at top */}
      <Navbar />
      {/* Main content */}
      <main className="flex-1">{children}</main>
      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}
