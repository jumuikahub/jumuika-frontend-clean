// app/(site)/layout.tsx
import type { Metadata } from "next";
import "../globals.css"; // one clean global import

export const metadata: Metadata = {
  title: "Jumuika Hub KE",
  description: "WhatsApp-First SaaS Business Toolkit for Vendors, Institutions, and Buyers.",
  openGraph: {
    title: "Jumuika Hub KE",
    description: "Smart WhatsApp-First SaaS toolkit for bookings, payments, float rewards, and more.",
    url: "https://jumuika.vercel.app",
    siteName: "Jumuika Hub KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
