// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jumuika Hub KE – WhatsApp-First Smart Business Toolkit",
    template: "%s · Jumuika Hub KE",
  },
  description:
    "Jumuika Hub KE connects vendors, institutions, and students on WhatsApp. Real-time commerce. No apps needed.",
  applicationName: "Jumuika Hub KE",
  metadataBase: new URL("https://jumuika-frontend-clean-2.vercel.app"),
  openGraph: {
    title: "Jumuika Hub KE",
    description:
      "WhatsApp-first smart business toolkit for vendors, institutions, and students.",
    url: "/",
    siteName: "Jumuika Hub KE",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Jumuika Hub KE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jumuika Hub KE",
    description:
      "WhatsApp-first smart business toolkit for vendors, institutions, and students.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo-64.png", sizes: "64x64", type: "image/png" },
      { url: "/logo-128.png", sizes: "128x128", type: "image/png" },
      { url: "/logo-256.png", sizes: "256x256", type: "image/png" },
      { url: "/logo-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/logo-256.png" }],
  },
  keywords: [
    "Jumuika",
    "WhatsApp commerce",
    "Institutions",
    "Vendors",
    "Students",
    "Kenya",
  ],
};

export const viewport: Viewport = {
  themeColor: "#065f46", // emerald-800
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
