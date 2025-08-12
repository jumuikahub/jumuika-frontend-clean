// app/site/layout.tsx
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Jumuika Hub KE – WhatsApp-First Smart Business Toolkit",
  description:
    "Connect vendors, institutions, and students seamlessly. Real-time commerce. No apps needed.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f766e" }, // emerald-700
    { media: "(prefers-color-scheme: dark)", color: "#0f766e" },
  ],
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Jumuika Hub KE" }],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased [text-rendering:optimizeLegibility] bg-white text-slate-900">
        <div className="min-h-screen pt-[env(safe-area-inset-top)]">
          {children}
        </div>
      </body>
    </html>
  );
}
