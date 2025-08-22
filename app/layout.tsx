// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jumuika Hub KE",
  description:
    "WhatsApp-first smart business toolkit for vendors & institutions — simple listings, instant WhatsApp orders, and real-time engagement.",
  // With the opengraph-image route in place, Next can resolve OG assets automatically.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {/* Main page content */}
        <main className="min-h-screen">{children}</main>

        {/* ✅ Keep only a single Footer render */}
        <Footer />
      </body>
    </html>
  );
}
