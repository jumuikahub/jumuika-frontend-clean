import Link from "next/link";
import { Button } from "@/components/ui";
import React from "react";

export default function HomePage() {
  return (
    <section className="bg-emerald-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-emerald-900">
          Welcome to Jumuika Hub KE
        </h1>

        <p className="mt-4 max-w-3xl text-emerald-900/80">
          Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects
          vendors, institutions, and students seamlessly. Real-time commerce. No
          apps needed.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* Services CTA (solid) */}
          <Button as="a" href="https://wa.me/254104250912" target="_blank" rel="noopener">
            Book Services via WhatsApp
          </Button>

          {/* Items CTA (outline) */}
          <Button as="a" href="https://wa.me/254104250912" target="_blank" rel="noopener" variant="outline">
            Buy Items via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
