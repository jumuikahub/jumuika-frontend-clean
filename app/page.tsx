"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 flex flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
        Welcome to <span className="text-green-600">Jumuika Hub KE</span>
      </h1>
      <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 mb-10">
        A WhatsApp-First Smart Business Toolkit. Automate bookings, payments, and vendor listings
        while keeping your business connected on WhatsApp.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="https://wa.me/254700915610?text=I%20want%20to%20Buy">
          <Button size="lg" className="rounded-2xl">
            Buy Items via WhatsApp
          </Button>
        </Link>
        <Link href="https://wa.me/254700915610?text=I%20want%20to%20Book">
          <Button size="lg" variant="outline" className="rounded-2xl">
            Book Services via WhatsApp
          </Button>
        </Link>
      </div>

      <div className="mt-12">
        <ModeToggle />
      </div>
    </main>
  );
}
