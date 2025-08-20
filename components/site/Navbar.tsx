// components/site/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import constants from "@/lib/constants";

export default function Navbar() {
  const { BRAND_NAME, NAV_LINKS, LOGO_PATH } = constants;

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16">
        <Link href="/" className="flex items-center gap-2">
          {/* Try logo; fall back to brand text if image is missing at build time */}
          {/* If /public/logo.png does not exist, Next will still render, so we show both safely */}
          <div className="flex items-center gap-2">
            <Image
              src={LOGO_PATH}
              alt={BRAND_NAME}
              width={24}
              height={24}
              className="rounded-md border object-contain"
              onError={(e) => {
                // hide broken image gracefully (client side)
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <span className="text-sm font-semibold tracking-tight">{BRAND_NAME}</span>
          </div>
        </Link>

        <ul className="flex items-center gap-4 text-sm">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-3 py-1.5 text-zinc-700 hover:bg-zinc-100"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
