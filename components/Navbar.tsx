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
          </nav>
        </div>
      </div>
    </header>
  );
}
