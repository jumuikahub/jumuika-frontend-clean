// components/site/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NAV: { href: string; label: string }[] = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/institutions", label: "Institutions" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          {/* place /public/logo.svg or logo.png in the repo */}
          <Image
            src="/logo.svg"
            alt="Jumuika Hub KE"
            width={28}
            height={28}
            priority
          />
          <span className="font-semibold tracking-tight">Jumuika Hub KE</span>
        </Link>

        <nav className="hidden gap-6 md:flex">
          {NAV.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "text-sm transition-colors hover:text-foreground",
                  active ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/internlink"
            className="btn-ghost"
            aria-label="InternLink"
          >
            InternLink
          </Link>
          <Link href="/manager" className="btn-primary" aria-label="Manager">
            Manager
          </Link>
        </div>
      </div>
    </header>
  );
}
