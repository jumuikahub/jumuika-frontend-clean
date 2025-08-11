<<<<<<< Updated upstream
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/about", label: "About" },
  { href: "/institutions", label: "For Colleges & Schools" },
  { href: "/internlink", label: "InternLink" },
  // 👇 deliberately NO Blog here (Blog is only in the footer)
];

export default function Navbar() {
  const pathname = usePathname();

=======
// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
>>>>>>> Stashed changes
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-emerald-700 hover:text-emerald-800"
          >
            Jumuika Hub KE
          </Link>

<<<<<<< Updated upstream
          <nav className="hidden gap-6 md:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "text-sm transition-colors",
                    active
                      ? "text-emerald-700"
                      : "text-slate-600 hover:text-emerald-700",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
=======
          <nav className="hidden md:flex gap-6">
            <Link
              href="/about"
              className="text-sm text-slate-600 hover:text-emerald-700 transition-colors"
            >
              About
            </Link>
            <Link
              href="/institutions"
              className="text-sm text-slate-600 hover:text-emerald-700 transition-colors"
            >
              For Colleges &amp; Schools
            </Link>
            <Link
              href="/internlink"
              className="text-sm text-slate-600 hover:text-emerald-700 transition-colors"
            >
              InternLink
            </Link>
>>>>>>> Stashed changes
          </nav>
        </div>
      </div>
    </header>
  );
}
