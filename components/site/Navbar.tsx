"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button"; // ✅ Fixed: capital B

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/institutions", label: "For Colleges & Schools" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <Link href="/" className="text-xl font-bold">
        Jumuika Hub KE
      </Link>
      <div className="flex space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Button>Get Started</Button>
    </nav>
  );
}
