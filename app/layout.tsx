import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import constants from '@/lib/constants';

export const metadata: Metadata = {
  title: constants.BRAND,
  description: constants.TAGLINE,
  metadataBase:
    process.env.NEXT_PUBLIC_SITE_URL
      ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
      : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-zinc-900 antialiased">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 sm:px-6">{children}</main>
        {/* Exactly ONE footer render across the site */}
        <Footer />
      </body>
    </html>
  );
}
