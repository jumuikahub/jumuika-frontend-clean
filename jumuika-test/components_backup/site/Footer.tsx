"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      {/* Top row */}
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand blurb */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3.5 w-3.5 rounded-full bg-emerald-600" />
              <span className="text-sm font-medium">Jumuika Hub KE</span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-600">
              WhatsApp-first smart business toolkit for vendors &amp; institutions — simple
              listings, instant WhatsApp orders, and real-time engagement.
            </p>
          </div>

          {/* Company */}
          <nav className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wide text-neutral-900">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-neutral-700 hover:text-neutral-900">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wide text-neutral-900">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-neutral-700 hover:text-neutral-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-neutral-700 hover:text-neutral-900">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Jumuika Hub KE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
