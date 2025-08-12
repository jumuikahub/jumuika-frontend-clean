// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jumuika Hub KE – WhatsApp-First Smart Business Toolkit",
  description:
    "Connect vendors, institutions, and students seamlessly. Real-time commerce. No apps needed.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Jumuika Hub KE",
    description:
      "WhatsApp-first smart business toolkit to connect vendors, institutions, and students.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  metadataBase: new URL("https://jumuika-frontend-clean-2.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Keep body simple; sub-layouts can add gradients/wrappers */}
      <body className="min-h-dvh bg-white antialiased">{children}</body>
    </html>
  );
}
