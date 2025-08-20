// components/site/Navbar.tsx
import Link from "next/link";
import constants from "@/lib/constants";

const { BRAND_NAME, NAV_LINKS } = constants;

export default function Navbar() {
  return (
    <header className="section sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="wrap flex h-14 items-center justify-between">
        <Link href="/" className="font-medium">
          {BRAND_NAME}
        </Link>

        <nav className="hidden gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-zinc-700 hover:text-zinc-900">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/vendor-dashboard"
          className="inline-flex items-center rounded-full border border-emerald-600 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50"
        >
          Vendor Dashboard
        </Link>
      </div>
    </header>
  );
}
