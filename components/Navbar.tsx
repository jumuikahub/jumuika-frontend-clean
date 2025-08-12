// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/about", label: "About" },
  { href: "/institutions", label: "Institutions" },
  { href: "/how-it-works", label: "How It Works" }, // NEW
  { href: "/internlink", label: "InternLink" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold text-emerald-900">
          Jumuika Hub KE
        </Link>

        <ul className="flex items-center gap-5 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={clsx(
                  "rounded-md px-2 py-1 transition-colors",
                  pathname === l.href
                    ? "text-emerald-800"
                    : "text-slate-600 hover:text-emerald-800"
                )}
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
