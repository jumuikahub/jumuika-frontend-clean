// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Jumuika Hub KE",
    template: "%s • Jumuika Hub KE",
  },
  description:
    "WhatsApp-first smart business toolkit for vendors and students. Real-time commerce — no apps needed.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
