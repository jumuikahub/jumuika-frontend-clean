// app/(site)/layout.tsx
import "@/app/(site)/globals.css";
import Link from "next/link";
import Image from "next/image";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col bg-white text-slate-900">
        {/* ---- Navbar ---- */}
        <header className="sticky top-0 z-40 w-full bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/75 border-b">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="relative block h-7 w-7 rounded-full bg-emerald-600/15 ring-1 ring-emerald-600/20">
                <span className="absolute inset-0 grid place-items-center text-emerald-700 text-sm font-semibold">J</span>
              </span>
              <span className="font-medium">Jumuika Hub KE</span>
            </Link>

            <nav className="flex items-center gap-6 text-sm">
              <Link href="/about" className="hover:text-emerald-700">About</Link>
              <Link href="/institutions" className="hover:text-emerald-700">Institutions</Link>
              <Link href="/how-it-works" className="hover:text-emerald-700">How It Works</Link>
              <Link href="/internlink" className="hover:text-emerald-700">InternLink</Link>
            </nav>
          </div>
        </header>

        {/* ---- Page content ---- */}
        <main className="flex-1">
          {children}
        </main>

        {/* ---- Footer ---- */}
        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-6 text-sm">
              <Link href="/blog" className="hover:text-emerald-700">Blog</Link>
              <Link href="/terms" className="hover:text-emerald-700">Terms &amp; Conditions</Link>
              <Link href="/privacy" className="hover:text-emerald-700">Privacy Policy</Link>
            </div>
            <p className="text-xs text-slate-600">
              © 2025 Jumuika Hub KE. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
