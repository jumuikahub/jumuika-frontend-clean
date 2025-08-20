// app/(site)/layout.tsx
import "@/app/globals.css";
import type { Metadata } from "next";
import constants from "@/lib/constants";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const { BRAND_NAME } = constants;

export const metadata: Metadata = {
  title: BRAND_NAME,
  description: "Jumuika Hub KE website",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
