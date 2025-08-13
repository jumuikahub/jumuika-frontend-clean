// app/layout.tsx
import "./globals.css"; // <- REQUIRED

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jumuika Hub KE",
  description:
    "WhatsApp-first smart business toolkit that connects vendors, institutions, and students seamlessly. Real-time commerce. No apps needed.",
  metadataBase: new URL("https://jumuika-frontend-clean-2.vercel.app"),
  openGraph: {
    title: "Jumuika Hub KE",
    description:
      "WhatsApp-first smart business toolkit that connects vendors, institutions, and students seamlessly.",
    url: "https://jumuika-frontend-clean-2.vercel.app",
    siteName: "Jumuika Hub KE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Jumuika Hub KE" }],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
