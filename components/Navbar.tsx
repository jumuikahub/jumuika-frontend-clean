// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const linkClass = (href: string) =>
    `hover:text-primary transition ${
      pathname === href ? "font-semibold text-primary" : "text-muted-foreground"
    }`;

  return (
    <nav className="border-b bg-background shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-xl font-bold text-foreground">
          Jumuika Hub KE
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link href="/institutions" className={linkClass("/institutions")}>
            For Colleges &amp; Schools
          </Link>
          <Link href="/internlink" className={linkClass("/internlink")}>
            InternLink
          </Link>
          <Link href="/blog" className={linkClass("/blog")}>
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
