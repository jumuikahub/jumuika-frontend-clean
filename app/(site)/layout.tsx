// app/(site)/layout.tsx
import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navbar */}
      <header className="border-b bg-white">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            {/* tiny circle logo placeholder—replace with your Logo if you have one */}
            <span className="h-6 w-6 rounded-full bg-emerald-700 inline-block" />
            Jumuika Hub KE
          </Link>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/about" className="hover:text-emerald-700">About</Link>
            <Link href="/institutions" className="hover:text-emerald-700">Institutions</Link>
            <Link href="/how-it-works" className="hover:text-emerald-700">How It Works</Link>
            <Link href="/internlink" className="hover:text-emerald-700">InternLink</Link>
          </div>
        </nav>
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Single footer rendered here only */}
      <Footer />
    </div>
  );
}
