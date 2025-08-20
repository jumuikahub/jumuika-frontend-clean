// components/site/Navbar.tsx
import Link from "next/link";
import constants from "@/lib/constants";

const { BRAND_NAME, NAV_LINKS } = constants;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo slot (optional SVG). Replace /logo.svg when ready */}
          {/* <img src="/logo.svg" alt={`${BRAND_NAME} logo`} className="h-6 w-6" /> */}
          <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary text-xs font-bold">
            J
          </span>
          <span className="text-sm font-semibold">{BRAND_NAME}</span>
        </Link>

        <div className="flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-neutral-700 hover:text-primary"
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/vendor-dashboard"
            className="rounded-full border px-4 py-2 text-sm font-medium hover:bg-neutral-50"
          >
            Vendor Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
}
