"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-green-600">
          Jumuika Hub KE
        </Link>

        {/* Menu */}
        <div className="space-x-6">
          <Link href="/about" className="hover:text-green-600">
            About
          </Link>
          <Link href="/how-it-works" className="hover:text-green-600">
            How It Works
          </Link>
          <Link href="/blog" className="hover:text-green-600">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
