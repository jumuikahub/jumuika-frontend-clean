// components/site/Navbar.tsx
"use client";

import Link from "next/link";
import constants from "@/lib/constants";
const { BRAND, NAV_LINKS } = constants;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          {/* Fallback logo using initial */}
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white text-xs font-semibold">
            J
          </span>
          <span className="font-medium text-sm">{BRAND}</span>
        </Link>

        <div className="flex items-center gap-2">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-100"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/vendor-dashboard"
            className="rounded-full border px-3 py-1.5 text-sm hover:bg-zinc-50"
          >
            Vendor Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
}
