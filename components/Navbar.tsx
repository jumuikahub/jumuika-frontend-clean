// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/institutions", label: "Institutions" },
  { href: "/internlink", label: "InternLink" },
  { href: "/how-it-works", label: "How It Works" }, // new link
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Jumuika Hub KE"
              width={32}
              height={32}
              priority
              className="h-8 w-8 rounded-md"
            />
            <span className="hidden text-base font-semibold text-emerald-800 sm:inline">
              Jumuika Hub KE
            </span>
          </Link>
        </div>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 sm:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-slate-700 transition hover:text-emerald-700"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA (kept simple; both CTAs are on the hero too) */}
        <div className="hidden sm:block">
          <Link
            href="https://wa.me/254104250912?text=Hello%20Jumuika%20Hub%20KE"
            className="rounded-lg bg-emerald-700 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-800"
          >
            Chat on WhatsApp
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t bg-white sm:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-3">
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-md px-2 py-2 text-slate-700 hover:bg-slate-50"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="https://wa.me/254104250912?text=Hello%20Jumuika%20Hub%20KE"
                  className="block rounded-md bg-emerald-700 px-3 py-2 text-center font-medium text-white hover:bg-emerald-800"
                  onClick={() => setOpen(false)}
                >
                  Chat on WhatsApp
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
