// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

// If you have these components, keep the imports.
// If not, you can temporarily comment them out.
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Jumuika Hub KE",
  description:
    "WhatsApp-first smart business toolkit for vendors & institutions — simple listings, instant WhatsApp orders, and real-time engagement.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  openGraph: {
    title: "Jumuika Hub KE",
    description:
      "WhatsApp-first smart business toolkit for vendors & institutions — simple listings, instant WhatsApp orders, and real-time engagement.",
    url: "https://jumuika-frontend-clean.vercel.app",
    siteName: "Jumuika Hub KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jumuika Hub KE",
    description:
      "WhatsApp-first smart business toolkit for vendors & institutions — simple listings, instant WhatsApp orders, and real-time engagement.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        {/* Top navigation (safe if component exists) */}
        <Navbar />

        {/* Main page content */}
        <main className="min-h-[60vh]">{children}</main>

        {/* Single, compact footer (safe if component exists) */}
        <Footer />
      </body>
    </html>
  );
}
