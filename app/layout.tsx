import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SupabaseProvider } from "@/context/supabase-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jumuika Hub KE",
  description: "WhatsApp-first SaaS Business Toolkit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider>
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
