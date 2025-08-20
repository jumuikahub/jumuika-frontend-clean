// components/site/Navbar.tsx
import Link from "next/link";
import constants from "@/lib/constants";
const { NAV_LINKS } = constants;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white text-sm font-semibold">
            J
          </span>
          <span className="font-medium">Jumuika Hub KE</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-zinc-700 hover:text-zinc-900">
              {l.label}
            </Link>
          ))}
          <Link
            href="/vendor-dashboard"
            className="rounded-full border border-zinc-300 px-3.5 py-1.5 text-sm hover:bg-zinc-50"
          >
            Vendor Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
