// components/site/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils"; // if you don't have a cn helper, replace with simple string join

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-6 px-4 sm:h-16">
        <Link href="/" className="flex items-center gap-2">
          {/* If /public/logo.svg exists it renders; otherwise text still shows */}
          <Image
            src="/logo.svg"
            alt="Jumuika logo"
            width={24}
            height={24}
            className="h-6 w-6"
            priority
          />
          <span className="font-semibold tracking-tight">Jumuika Hub KE</span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  active
                    ? "text-emerald-700"
                    : "text-zinc-600 hover:text-emerald-700"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto">
          <Link
            href="/vendors/dashboard"
            className="rounded-full border border-emerald-600 px-3 py-1.5 text-sm font-medium text-emerald-700 hover:bg-emerald-50"
          >
            Vendor Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}
