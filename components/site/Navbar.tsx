"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-sm bg-white">
      <Link href="/" className="text-xl font-bold">
        Jumuika Hub KE
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/about">About</Link>
        <Link href="/institutions">For Colleges & Schools</Link>
        <Link href="/internlink">InternLink</Link>
        <Button variant="primary" asChild>
          <Link href="https://wa.me/254104250912">Get Started</Link>
        </Button>
      </div>
    </nav>
  )
}
