"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  // NOTE: Blog is intentionally not in the navbar (footer only)
];

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={[
        "rounded-full px-3 py-2 text-sm font-medium transition-colors",
        active
          ? "text-emerald-900 bg-emerald-50"
          : "text-zinc-700 hover:text-emerald-900 hover:bg-emerald-50",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          {/* If /public/logo.svg exists it will render; otherwise text shows */}
          <span className="relative block h-6 w-6 overflow-hidden rounded-full ring-1 ring-emerald-200">
            <Image
              src="/logo.svg"
              alt="Jumuika Hub KE"
              fill
              className="object-contain p-0.5"
              sizes="24px"
            />
          </span>
          <span className="font-semibold tracking-tight text-emerald-900">
            Jumuika Hub KE
          </span>
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              active={pathname === item.href}
            />
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <Link
            href="/vendors/dashboard"
            className="inline-flex items-center justify-center rounded-full border border-emerald-300 px-3.5 py-2 text-sm font-medium text-emerald-800 transition-colors hover:bg-emerald-50"
          >
            Vendor Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}
