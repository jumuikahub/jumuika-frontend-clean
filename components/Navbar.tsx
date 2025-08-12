// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "About", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Institutions", href: "/institutions" },
    { name: "InternLink", href: "/internlink" },
  ];

  return (
    <nav className="border-b bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold text-emerald-900">
          Jumuika Hub KE
        </Link>
        <div className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium ${
                pathname === link.href
                  ? "text-emerald-700 underline"
                  : "text-gray-600 hover:text-emerald-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
