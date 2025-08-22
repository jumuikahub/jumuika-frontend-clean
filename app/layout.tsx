import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  // 👇 change to your real domain after cut-over
  metadataBase: new URL("https://jumuika-frontend-clean-nlw9-9marp4oyp.vercel.app"),
  title: {
    default: "Jumuika Hub KE",
    template: "%s • Jumuika Hub KE",
  },
  description:
    "WhatsApp-first smart business toolkit — simple listings, instant WhatsApp orders, and real-time engagement.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-neutral-900 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
