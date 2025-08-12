// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-emerald-900/5"
      role="banner"
    >
      <nav
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-3 sm:px-4"
        aria-label="Primary"
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={close}>
          <Image
            src="/logo-64.png"
            alt="Jumuika Hub KE"
            width={28}
            height={28}
            priority
          />
          <span className="sr-only sm:not-sr-only sm:text-sm sm:font-semibold sm:text-emerald-900">
            Jumuika Hub KE
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <li>
            <Link
              href="/about"
              className="hover:text-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/institutions"
              className="hover:text-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            >
              Institutions
            </Link>
          </li>
          <li>
            <Link
              href="/how-it-works"
              className="hover:text-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link
              href="/internlink"
              className="hover:text-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            >
              InternLink
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-900/10 bg-white text-emerald-900 shadow-xs hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu sheet */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-[max-height] duration-300 ease-out overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 border-t border-emerald-900/10 bg-white p-3">
          <li>
            <Link
              href="/about"
              onClick={close}
              className="block rounded-lg px-3 py-3 text-slate-800 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/institutions"
              onClick={close}
              className="block rounded-lg px-3 py-3 text-slate-800 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Institutions
            </Link>
          </li>
          <li>
            <Link
              href="/how-it-works"
              onClick={close}
              className="block rounded-lg px-3 py-3 text-slate-800 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link
              href="/internlink"
              onClick={close}
              className="block rounded-lg px-3 py-3 text-slate-800 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              InternLink
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
