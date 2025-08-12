"use client";

import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const waUrl = (text: string) =>
    `https://wa.me/254104250912?text=${encodeURIComponent(text)}`;

  return (
    <main className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-emerald-800 sm:text-5xl">
          Welcome to Jumuika Hub KE
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Jumuika Hub KE is a WhatsApp-first smart business toolkit that
          connects vendors, institutions, and students seamlessly. Real-time
          commerce. No apps needed.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={waUrl(
              "Hi! I want to book services via Jumuika Hub KE."
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="default"
              className="h-11 rounded-xl px-5 sm:px-6 bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm hover:shadow-md hover:shadow-emerald-900/10"
            >
              <span className="mr-2">Book Services via WhatsApp</span>
              <ArrowRight className="size-[18px]" aria-hidden="true" />
            </Button>
          </Link>

          <Link
            href={waUrl(
              "Hi! I want to buy items via Jumuika Hub KE."
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="default"
              className="h-11 rounded-xl px-5 sm:px-6 bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm hover:shadow-md hover:shadow-emerald-900/10"
            >
              <span className="mr-2">Buy Items via WhatsApp</span>
              <ShoppingCart className="size-[18px]" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
