// app/(site)/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
// FIX: correct path to the app-level stylesheet
import "../globals.css";

export const metadata: Metadata = {
  title: "Jumuika Hub KE",
  description:
    "WhatsApp-first smart business toolkit connecting vendors, institutions, and students. Real-time commerce. No apps needed.",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {/* Header */}
        <header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur">
          <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4 sm:h-16">
            <Link href="/" className="flex items-center gap-2" aria-label="Jumuika Hub KE">
              {/* No event handlers on <Image> here (server component) */}
              <Image
                src="/logo-mark.svg"
                alt="Jumuika Hub KE"
                width={28}
                height={28}
                priority
                className="inline-block"
              />
              <span className="ml-1 text-sm font-semibold sm:text-base">Jumuika Hub KE</span>
            </Link>

            <nav className="hidden items-center gap-6 text-sm sm:flex">
              <Link href="/about" className="transition hover:text-emerald-700">About</Link>
              <Link href="/institutions" className="transition hover:text-emerald-700">Institutions</Link>
              <Link href="/how-it-works" className="transition hover:text-emerald-700">How It Works</Link>
              <Link href="/internlink" className="transition hover:text-emerald-700">InternLink</Link>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="mx-auto w-full max-w-screen-xl px-4">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-16 border-t">
          <div className="mx-auto w-full max-w-screen-xl px-4 py-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-6 text-sm">
                <Link href="/blog" className="transition hover:text-emerald-700">Blog</Link>
                <Link href="/terms" className="transition hover:text-emerald-700">Terms & Conditions</Link>
                <Link href="/privacy" className="transition hover:text-emerald-700">Privacy Policy</Link>
              </div>
              <p className="text-center text-xs text-slate-500">
                © {new Date().getFullYear()} Jumuika Hub KE. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
