// app/(site)/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Jumuika Hub KE",
  description: "WhatsApp-first smart business toolkit for Kenya.",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-slate-900 antialiased">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/90 backdrop-blur">
          <Container className="flex h-14 items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Jumuika Hub KE"
                width={28}
                height={28}
                priority
                className="rounded-full"
              />
              <span className="sr-only sm:not-sr-only sm:text-sm sm:font-medium">
                Jumuika Hub KE
              </span>
            </Link>

            <nav className="flex items-center gap-6 text-sm">
              <Link href="/about" className="hover:text-emerald-700">
                About
              </Link>
              <Link href="/institutions" className="hover:text-emerald-700">
                Institutions
              </Link>
              <Link href="/how-it-works" className="hover:text-emerald-700">
                How It Works
              </Link>
              <Link href="/internlink" className="hover:text-emerald-700">
                InternLink
              </Link>
            </nav>
          </Container>
        </header>

        {/* Main */}
        <main className="py-8 sm:py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200/60">
          <Container className="flex flex-col-reverse items-center justify-between gap-4 py-6 text-xs sm:flex-row sm:text-sm">
            <div className="flex items-center gap-4">
              <Link href="/blog" className="hover:text-emerald-700">Blog</Link>
              <Link href="/terms" className="hover:text-emerald-700">Terms &amp; Conditions</Link>
              <Link href="/privacy" className="hover:text-emerald-700">Privacy Policy</Link>
            </div>
            <p className="text-slate-500">
              © {new Date().getFullYear()} Jumuika Hub KE. All Rights Reserved.
            </p>
          </Container>
        </footer>
      </body>
    </html>
  );
}
