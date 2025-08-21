// components/site/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import constants from "@/lib/constants";

const { BRAND, NAV_LINKS } = constants;

/**
 * Renders the brand logo. Place your logo at /public/logo.svg (preferred) or /public/logo.png.
 * If the image is missing, we fallback to the brand text.
 */
function Brand() {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      {/* Logo image (expects /public/logo.svg or /public/logo.png) */}
      <Image
        src="/logo.svg"
        alt={`${BRAND} logo`}
        width={28}
        height={28}
        className="rounded-full"
        priority
        onError={(e) => {
          // If the SVG is missing, hide the broken image (text fallback will still render)
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <span className="font-semibold tracking-tight">{BRAND}</span>
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Brand />

        <nav aria-label="Main" className="hidden md:flex items-center gap-6">
          {NAV_LINKS?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-4">
          <Link
            href="/vendor-dashboard"
            className="inline-flex items-center rounded-full border border-emerald-700/30 px-4 py-1.5 text-sm font-medium text-emerald-800 hover:bg-emerald-50"
          >
            Vendor Dashboard
          </Link>
        </div>
      </div>

      {/* Mobile nav (optional minimal) */}
      <nav className="md:hidden border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex gap-4 overflow-x-auto">
          {NAV_LINKS?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-700 whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
