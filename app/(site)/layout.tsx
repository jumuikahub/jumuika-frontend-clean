import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jumuika Hub KE – WhatsApp-First SaaS Business Toolkit",
  description:
    "Run your business on WhatsApp with Jumuika Hub KE. Automate bookings, payments, referrals, and customer engagement—without needing an app.",
  metadataBase: new URL("https://jumuikahub.vercel.app"),
  openGraph: {
    title: "Jumuika Hub KE",
    description:
      "WhatsApp-First SaaS Business Toolkit for payments, bookings, and referrals.",
    url: "https://jumuikahub.vercel.app",
    siteName: "Jumuika Hub KE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jumuika Hub KE",
    description:
      "WhatsApp-First SaaS Business Toolkit for payments, bookings, and referrals.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
