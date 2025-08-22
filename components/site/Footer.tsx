'use client';

import Link from 'next/link';
import constants from '@/lib/constants';

export default function Footer() {
  const { BRAND, TAGLINE } = constants;

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 py-10 md:grid-cols-3">
          {/* Brand + tagline */}
          <div>
            <div className="flex items-center gap-3">
              {/* tiny logo pill fallback so the logo always “renders” */}
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-600/80" />
              <span className="font-semibold tracking-tight">{BRAND}</span>
            </div>
            <p className="mt-3 text-sm text-zinc-600">{TAGLINE}</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>
                <Link href="/blog" className="hover:text-zinc-900">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>
                <Link href="/privacy" className="hover:text-zinc-900">Privacy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-zinc-900">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t" />

        <div className="py-6">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
