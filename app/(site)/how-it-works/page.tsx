// app/(site)/how-it-works/page.tsx
import React from "react";
import { BRAND } from "@/lib/constants";
import { PrimaryCTAs } from "@/components/ui/PrimaryCTAs";

export const metadata = {
  title: `${BRAND} – How It Works`,
  description: "How to get started and use the platform effectively.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">How {BRAND} Works</h1>
        <ol className="mt-6 space-y-4 text-neutral-700 md:text-lg">
          <li>1) Join via WhatsApp</li>
          <li>2) Set up your vendor or business profile</li>
          <li>3) Start accepting bookings & payments</li>
        </ol>
        <PrimaryCTAs className="mt-10" />
      </section>
    </main>
  );
}
