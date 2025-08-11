<<<<<<< Updated upstream
import type { Metadata } from "next";
=======
// app/layout.tsx
>>>>>>> Stashed changes
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

<<<<<<< Updated upstream
export const metadata: Metadata = {
  title: "Jumuika Hub KE – WhatsApp-First Smart Business Toolkit",
  description:
    "Connect vendors, institutions, and students seamlessly via WhatsApp. No apps needed.",
  metadataBase:
    new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://jumuika-frontend-clean.vercel.app"),
  openGraph: {
    title: "Jumuika Hub KE",
    description:
      "WhatsApp-first smart business toolkit for vendors, institutions and students.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://jumuika-frontend-clean.vercel.app",
    siteName: "Jumuika Hub KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jumuika Hub KE",
    description:
      "WhatsApp-first smart business toolkit for vendors, institutions and students.",
  },
=======
export const metadata = {
  title: "Jumuika Hub KE – WhatsApp-First Smart Business Toolkit",
  description:
    "Connect vendors, institutions, and students seamlessly. Real-time commerce. No apps needed.",
>>>>>>> Stashed changes
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
