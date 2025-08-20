// app/(site)/layout.tsx
import type { Metadata } from "next";
import "../globals.css";
import constants from "@/lib/constants";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: constants.BRAND_NAME,
  description: constants.TAGLINE,
  metadataBase:
    process.env.NEXT_PUBLIC_SITE_URL
      ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
      : undefined,
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
