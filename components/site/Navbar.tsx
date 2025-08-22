'use client';

import Link from 'next/link';
import Image from 'next/image';
import constants from '@/lib/constants';

export default function Navbar() {
  const { BRAND, NAV_LINKS } = constants;

  return (
    <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          {/* If /logo.svg exists it shows; otherwise we keep the fallback pill */}
          <span className="relative h-6 w-6 overflow-hidden rounded-full">
            <Image
              src="/logo.svg"
              alt={`${BRAND} logo`}
              fill
              sizes="24px"
              className="object-contain"
              onError={(e) => {
                // keep the green pill as fallback
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className="absolute inset-0 rounded-full bg-brand-600" />
          </span>
          <span className="font-medium">{BRAND}</span>
        </Link>

        <div className="flex items-center gap-2">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-50"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/vendor-dashboard"
            className="rounded-full border px-3 py-1.5 text-sm text-zinc-800 hover:bg-zinc-50"
          >
            Vendor Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
}
