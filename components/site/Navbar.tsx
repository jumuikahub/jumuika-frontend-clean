"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          Jumuika Hub KE
        </Link>

        {/* Desktop Links */}
        <div className="hidden space-x-6 md:flex">
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>
          <Link href="/how-it-works" className="hover:text-primary">
            How It Works
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="space-y-2 border-t p-4 md:hidden">
          <Link href="/about" className="block hover:text-primary">
            About
          </Link>
          <Link href="/blog" className="block hover:text-primary">
            Blog
          </Link>
          <Link href="/how-it-works" className="block hover:text-primary">
            How It Works
          </Link>
        </div>
      )}
    </header>
  );
}
