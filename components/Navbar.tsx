"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/about", label: "About" },
  // Renamed label only (route stays /institutions)
  { href: "/institutions", label: "Institutions" },
  { href: "/internlink", label: "InternLink" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-emerald-800"
        >
          Jumuika Hub KE
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "transition-colors",
                  active
                    ? "text-emerald-800"
                    : "text-slate-600 hover:text-slate-900",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
