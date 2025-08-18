// components/site/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND } from "@/lib/constants";

const links = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/blog", label: "Blog" },
  // Institutions & InternLink intentionally hidden for now.
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={[
        "text-sm transition",
        active ? "text-emerald-900" : "text-emerald-900/70 hover:text-emerald-900",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-emerald-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-emerald-700" aria-hidden />
          <span className="text-sm font-semibold text-emerald-900">
            {BRAND.name}
          </span>
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <NavLink key={l.href} {...l} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/vendors"
            className="inline-flex items-center rounded-full border border-emerald-700 text-emerald-800 text-sm px-4 py-2 hover:bg-emerald-50"
          >
            Vendor Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}
