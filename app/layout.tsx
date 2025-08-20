// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import constants from "@/lib/constants";

export const metadata: Metadata = {
  title: constants.BRAND,
  description: constants.TAGLINE,
  metadataBase:
    process.env.NEXT_PUBLIC_SITE_URL
      ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
      : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">{children}</main>
        {/* Footer is rendered exactly once, here */}
        <Footer />
      </body>
    </html>
  );
}
