// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import constants from "@/lib/constants";

const { BRAND, TAGLINE } = constants;

export const metadata: Metadata = {
  title: {
    template: `%s • ${BRAND}`,
    default: BRAND,
  },
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
    <html lang="en" className="h-full bg-white text-zinc-900">
      <body className="min-h-screen flex flex-col">
        <Navbar />

        {/* Page content */}
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
