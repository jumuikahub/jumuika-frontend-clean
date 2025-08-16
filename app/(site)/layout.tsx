import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-emerald-900 antialiased">
        {/* Navbar */}
        <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur">
          <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-emerald-900"
              aria-label="Jumuika Hub KE"
            >
              {/* If /public/logo.svg exists it will render; if not, the text still shows */}
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="Jumuika Hub KE"
                  width={28}
                  height={28}
                  priority
                  className="h-7 w-7"
                  onError={(e) => {
                    // If the logo file is missing, hide the broken image and keep the text brand
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <span className="hidden sm:inline">Jumuika Hub KE</span>
              </div>
            </Link>

            <ul className="flex items-center gap-6 text-sm">
              <li><Link href="/about" className="hover:opacity-80">About</Link></li>
              <li><Link href="/institutions" className="hover:opacity-80">Institutions</Link></li>
              <li><Link href="/how-it-works" className="hover:opacity-80">How It Works</Link></li>
              <li><Link href="/internlink" className="hover:opacity-80">InternLink</Link></li>
            </ul>
          </nav>
        </header>

        {/* Page content */}
        <main className="min-h-[calc(100vh-12rem)]">
          {/*
            Wrap all pages in a centered container so nothing hugs the left edge.
            Individual pages can add their own section styling inside this container.
          */}
          <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
        </main>

        {/* Single Footer (avoid duplicates) */}
        <footer className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-sm text-emerald-900/70">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
              <Link href="/blog" className="hover:opacity-80">Blog</Link>
              <span className="hidden sm:inline">•</span>
              <Link href="/terms" className="hover:opacity-80">Terms &amp; Conditions</Link>
              <span className="hidden sm:inline">•</span>
              <Link href="/privacy" className="hover:opacity-80">Privacy Policy</Link>
            </div>

            <p className="mt-4 text-center">
              © 2025 Jumuika Hub KE. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
