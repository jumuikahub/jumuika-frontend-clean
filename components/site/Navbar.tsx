// components/site/Navbar.tsx
import Link from "next/link";
import constants from "@/lib/constants";

export default function Navbar() {
  const { BRAND, NAV_LINKS } = constants;

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Reliable text-logo fallback */}
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white text-xs font-bold">
            J
          </span>
          <span className="font-medium text-zinc-900">{BRAND}</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-4">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-700 hover:text-zinc-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/vendor-dashboard"
          className="ml-3 rounded-xl border px-3 py-1.5 text-sm bg-white text-zinc-800 hover:bg-zinc-50 border-zinc-200"
        >
          Vendor Dashboard
        </Link>
      </div>
    </header>
  );
}
