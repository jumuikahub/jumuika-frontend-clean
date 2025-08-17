import type { Metadata } from "next";
import { Inter } from "next/font/google";
// ✅ Use relative import so it works regardless of alias config
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jumuika Hub KE",
  description:
    "WhatsApp-First SaaS Business Toolkit for vendors, institutions, and organizations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
