// app/(site)/how-it-works/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui";

export default function HowItWorksPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:py-24">
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-emerald-900 sm:text-5xl">
            How Jumuika Hub KE Works
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-emerald-800/90">
            We’ve designed Jumuika Hub KE to be the easiest way for vendors,
            institutions, and students to connect, transact, and grow — all via
            WhatsApp. Here’s how it works:
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-900">1. Onboard</h3>
              <p className="mt-2 text-emerald-800/90">
                Vendors and institutions register through our onboarding form and
                connect their WhatsApp number.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-900">2. List &amp; Manage</h3>
              <p className="mt-2 text-emerald-800/90">
                Add your services, products, or bookings to your Jumuika dashboard
                and manage in real-time.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-900">3. Connect &amp; Sell</h3>
              <p className="mt-2 text-emerald-800/90">
                Customers reach you instantly via WhatsApp, book services, or buy
                items — no extra apps required.
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild>
              <Link href="/internlink">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
