import "./globals.css";
import type { Metadata } from "next";
import constants from "@/lib/constants";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const { BRAND, TAGLINE } = constants;

export const metadata: Metadata = {
  title: BRAND,
  description: TAGLINE,
  metadataBase:
    process.env.NEXT_PUBLIC_SITE_URL
      ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
      : undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        <Navbar />
        <main className="min-h-[60vh]">{children}</main>
        {/* Exactly one footer rendered here */}
        <Footer />
      </body>
    </html>
  );
}
