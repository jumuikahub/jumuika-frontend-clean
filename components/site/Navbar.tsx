// components/site/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { WHATSAPP_CTA } from "@/lib/constants";
import clsx from "clsx";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/institutions", label: "Institutions" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Jumuika Hub KE"
            width={28}
            height={28}
            priority
          />
          <span className="font-semibold text-slate-900">Jumuika Hub KE</span>
        </Link>

        {/* Center links */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-sm font-medium text-slate-700 hover:text-slate-900",
                pathname === item.href && "text-slate-900"
              )}
            >
              {item.label}
            </Link>
          ))}

          {/* InternLink menu */}
          <div className="relative">
            <button
              onClick={() => setOpen((s) => !s)}
              className={clsx(
                "text-sm font-medium text-slate-700 hover:text-slate-900"
              )}
            >
              InternLink
            </button>
            {open && (
              <div
                onMouseLeave={() => setOpen(false)}
                className="absolute right-0 mt-3 w-56 rounded-xl border bg-white p-2 shadow-lg"
              >
                <Link
                  href="/internlink/supervisors"
                  className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                >
                  Supervisors
                </Link>
                <Link
                  href="/internlink/interns"
                  className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                >
                  Interns
                </Link>
                <Link
                  href="/internlink/psc"
                  className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                >
                  PSC
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Right CTA: Vendor Dashboard */}
        <div className="flex items-center gap-3">
          <Link
            href="/vendors/dashboard"
            className="hidden rounded-lg border border-emerald-600 px-3 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50 md:inline-block"
          >
            Vendor Dashboard
          </Link>

          {/* Mobile menu (simple) */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="inline-flex items-center rounded-lg border px-2 py-1 md:hidden"
            aria-label="Toggle Menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <div className="grid gap-2">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "block rounded-lg px-3 py-2 text-sm hover:bg-slate-50",
                    pathname === item.href && "font-semibold"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-2 rounded-lg border p-2">
                <div className="px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  InternLink
                </div>
                <Link
                  href="/internlink/supervisors"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                >
                  Supervisors
                </Link>
                <Link
                  href="/internlink/interns"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                >
                  Interns
                </Link>
                <Link
                  href="/internlink/psc"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                >
                  PSC
                </Link>
              </div>

              <Link
                href="/vendors/dashboard"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg border border-emerald-600 px-3 py-2 text-center text-sm font-medium text-emerald-700 hover:bg-emerald-50"
              >
                Vendor Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
