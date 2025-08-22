"use client";

import Link from "next/link";
import { BRAND, TAGLINE } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      <Link href="/" className="text-xl font-bold">
        {BRAND}
      </Link>
      <span className="text-gray-600 text-sm">{TAGLINE}</span>
    </nav>
  );
}
