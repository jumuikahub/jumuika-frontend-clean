// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Jumuika Hub KE",
  description:
    "WhatsApp-first smart business toolkit for vendors & institutions — simple listings, instant WhatsApp orders, and real-time engagement.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900 antialiased">{children}</body>
    </html>
  );
}
