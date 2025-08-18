// app/(site)/layout.tsx
import type { ReactNode } from "react";
import Link from "next/link";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Sticky, accessible navbar */}
      <header
        role="banner"
        className="sticky top-0 z-50 border-b bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container-responsive flex items-center justify-between h-16">
          <Link href="/" className="text-xl md:text-2xl font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
            Jumuika Hub KE
          </Link>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/how-it-works" className="hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              How it works
            </Link>
            <Link href="/institutions" className="hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              Institutions
            </Link>
            <Link href="/blog" className="hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              Blog
            </Link>
            <Link href="/about" className="hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/internlink"
              className="rounded-full border px-4 py-2 text-sm hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              InternLink
            </Link>
            <Link
              href="/manager"
              className="rounded-full bg-foreground text-background px-4 py-2 text-sm hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Manager
            </Link>
          </div>
        </div>

        {/* Mobile nav */}
        <nav aria-label="Mobile" className="md:hidden border-t">
          <div className="container-responsive flex flex-wrap gap-x-6 gap-y-2 py-3 text-sm">
            <Link href="/how-it-works" className="hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              How it works
            </Link>
            <Link href="/institutions" className="hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              Institutions
            </Link>
            <Link href="/blog" className="hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              Blog
            </Link>
            <Link href="/about" className="hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              About
            </Link>
          </div>
        </nav>
      </header>

      {/* Main content area with generous rhythm */}
      <main id="main" role="main" className="container-responsive pt-14 md:pt-20 pb-24">
        {children}
      </main>

      {/* Footer */}
      <footer role="contentinfo" className="border-t">
        <div className="container-responsive py-10 text-sm grid gap-8 md:grid-cols-3">
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
          <div className="container-responsive py-5 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} Jumuika Hub KE. All rights reserved.</span>
            <span>Built for WhatsApp-first commerce in Kenya.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
