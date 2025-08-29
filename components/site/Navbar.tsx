"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/site/Logo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand-light transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand-light transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand-light transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right: Theme toggle + Mobile button */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Menu"
            >
              {mobileOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 px-4 py-4 space-y-3">
          <Link
            href="/"
            className="block text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand-light transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand-light transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand-light transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
