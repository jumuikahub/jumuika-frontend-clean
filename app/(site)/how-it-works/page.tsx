// app/(site)/how-it-works/page.tsx
import type { Metadata } from "next";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "How Jumuika Hub KE Works",
  description:
    "See how vendors, institutions, and students connect and transact via WhatsApp using Jumuika Hub KE.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-[60vh] w-full">
      {/* Hero / intro */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-16">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-b from-emerald-50 to-white p-6 sm:p-10">
          <h1 className="text-balance text-3xl font-extrabold tracking-tight text-emerald-900 sm:text-4xl md:text-5xl">
            How Jumuika Hub KE Works
          </h1>

          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-emerald-900/80 sm:text-lg">
            We’ve designed Jumuika Hub KE to be the easiest way for vendors,
            institutions, and students to connect, transact, and grow — all via
            WhatsApp. Here’s how it works:
          </p>

          {/* Steps */}
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
            <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-900">
                1. Onboard
              </h3>
              <p className="mt-2 text-emerald-900/80">
                Vendors and institutions register through our onboarding form
                and connect their WhatsApp number.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-900">
                2. List &amp; Manage
              </h3>
              <p className="mt-2 text-emerald-900/80">
                Add your products, services, or bookings directly to your
                Jumuika dashboard and manage in real-time.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-900">
                3. Connect &amp; Sell
              </h3>
              <p className="mt-2 text-emerald-900/80">
                Customers contact you instantly via WhatsApp, book services, or
                buy items — without downloading any extra app.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            {/* Use the anchor variant of Button to satisfy types */}
            <Button as="a" href="/internlink" variant="primary">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
