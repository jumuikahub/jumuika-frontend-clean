// app/(site)/layout.tsx
import type { ReactNode } from "react";
import Link from "next/link";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Navbar */}
      <header className="border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-responsive flex items-center justify-between py-4">
          <Link href="/" className="text-xl md:text-2xl font-semibold">
            Jumuika Hub KE
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/how-it-works" className="hover:underline underline-offset-4">How it works</Link>
            <Link href="/institutions" className="hover:underline underline-offset-4">Institutions</Link>
            <Link href="/blog" className="hover:underline underline-offset-4">Blog</Link>
            <Link href="/about" className="hover:underline underline-offset-4">About</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/internlink"
              className="rounded-full border px-4 py-2 text-sm hover:bg-accent"
            >
              InternLink
            </Link>
            <Link
              href="/manager"
              className="rounded-full bg-foreground text-background px-4 py-2 text-sm hover:opacity-90"
            >
              Manager
            </Link>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden border-t">
          <div className="container-responsive flex flex-wrap gap-x-6 gap-y-2 py-3 text-sm">
            <Link href="/how-it-works" className="hover:underline underline-offset-4">How it works</Link>
            <Link href="/institutions" className="hover:underline underline-offset-4">Institutions</Link>
            <Link href="/blog" className="hover:underline underline-offset-4">Blog</Link>
            <Link href="/about" className="hover:underline underline-offset-4">About</Link>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="container-responsive py-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t">
        <div className="container-responsive py-8 text-sm grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <div className="font-semibold">Jumuika Hub KE</div>
            <p className="text-muted-foreground">
              WhatsApp-first smart business toolkit for vendors, institutions, and students.
            </p>
          </div>

          <div className="space-y-1">
            <div className="font-medium">Company</div>
            <div className="flex flex-col">
              <Link href="/about" className="hover:underline underline-offset-4">About</Link>
              <Link href="/blog" className="hover:underline underline-offset-4">Blog</Link>
              <Link href="/how-it-works" className="hover:underline underline-offset-4">How it works</Link>
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-medium">Legal</div>
            <div className="flex flex-col">
              <Link href="/privacy" className="hover:underline underline-offset-4">Privacy</Link>
              <Link href="/terms" className="hover:underline underline-offset-4">Terms</Link>
            </div>
          </div>
        </div>

        <div className="border-t">
          <div className="container-responsive py-4 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} Jumuika Hub KE. All rights reserved.</span>
            <span>Built for WhatsApp-first commerce in Kenya.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
