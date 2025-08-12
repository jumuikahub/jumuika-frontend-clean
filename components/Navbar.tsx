"use client";

// components/Navbar.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/institutions", label: "For Colleges & Schools" },
  { href: "/internlink", label: "InternLink" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold text-emerald-700">
          Jumuika Hub KE
        </Link>

        <nav className="flex gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                pathname === l.href
                  ? "text-emerald-700 font-medium"
                  : "text-slate-700 hover:text-emerald-700"
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
