"use client";

import Link from "next/link";
import constants from "@/lib/constants";

export default function Navbar() {
  const { BRAND, NAV_LINKS } = constants;

  return (
    <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="content-wrap h-14 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          {/* Text brand (simple & reliable). Swap for <Image> later if you have /public/logo.svg */}
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white text-xs font-semibold">
            J
          </span>
          <span className="ml-2 text-sm font-medium">{BRAND}</span>
        </Link>

        <ul className="hidden sm:flex items-center gap-6 text-sm">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link className="hover:underline" href={l.href}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/vendor-dashboard"
          className="hidden sm:inline-flex rounded-full border px-3.5 py-1.5 text-sm"
        >
          Vendor Dashboard
        </Link>
      </nav>
    </header>
  );
}
