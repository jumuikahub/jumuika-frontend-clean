// components/site/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          {/* If /public/logo.svg exists it renders; if not, the text still shows. */}
          <Image
            src="/logo.svg"
            alt={BRAND.name}
            width={24}
            height={24}
            className="h-6 w-6"
            priority
          />
          <span className="text-sm font-semibold tracking-tight">
            {BRAND.name}
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/about" className="text-sm text-zinc-700 hover:text-zinc-900">
            About
          </Link>
          <Link
            href="/how-it-works"
            className="text-sm text-zinc-700 hover:text-zinc-900"
          >
            How it works
          </Link>

          {/* Right-aligned CTA to Vendor dashboard */}
          <Link
            href="/vendors/dashboard"
            className="rounded-full border border-emerald-200 px-4 py-2 text-sm text-emerald-700 hover:bg-emerald-50"
          >
            Vendor Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
}
