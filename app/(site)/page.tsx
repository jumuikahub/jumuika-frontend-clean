// app/(site)/page.tsx
import React from "react";
import { BRAND, TAGLINE } from "@/lib/constants";
import { PrimaryCTAs } from "@/components/ui/PrimaryCTAs";

export const metadata = {
  title: `${BRAND} – Home`,
  description: TAGLINE,
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{BRAND}</h1>
          <p className="mt-4 text-base text-neutral-700 md:text-lg">{TAGLINE}</p>
          <PrimaryCTAs className="mt-8 justify-center" />
        </div>
      </section>
    </main>
  );
}
