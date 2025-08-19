// components/site/Navbar.tsx
"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-full bg-emerald-600" />
          <span className="font-medium text-zinc-900">Jumuika Hub KE</span>
        </Link>

        <div className="flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-700 hover:text-zinc-900"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/(site)/vendor-dashboard"
            className="rounded-full border border-emerald-600 px-3 py-1.5 text-sm font-medium text-emerald-700 hover:bg-emerald-50"
          >
            Vendor Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
}
