// app/(site)/how-it-works/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function HowItWorksPage() {
  return (
    <main className="w-full">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="rounded-3xl bg-emerald-50/70 ring-1 ring-emerald-100 p-6 sm:p-8 lg:p-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-emerald-900">
            How Jumuika Hub KE Works
          </h1>

          <p className="mt-3 max-w-3xl text-emerald-900/80">
            We’ve designed Jumuika Hub KE to be the easiest way for vendors, institutions,
            and students to connect, transact, and grow — all via WhatsApp. Here’s how it works:
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white ring-1 ring-emerald-100 p-5">
              <h3 className="font-semibold text-emerald-900">1. Onboard</h3>
              <p className="mt-2 text-emerald-900/80">
                Vendors and institutions register through our onboarding form and connect their WhatsApp number.
              </p>
            </div>

            <div className="rounded-2xl bg-white ring-1 ring-emerald-100 p-5">
              <h3 className="font-semibold text-emerald-900">2. List &amp; Manage</h3>
              <p className="mt-2 text-emerald-900/80">
                Add products, services, or bookings directly to your Jumuika dashboard and manage in real-time.
              </p>
            </div>

            <div className="rounded-2xl bg-white ring-1 ring-emerald-100 p-5">
              <h3 className="font-semibold text-emerald-900">3. Connect &amp; Sell</h3>
              <p className="mt-2 text-emerald-900/80">
                Customers contact you instantly via WhatsApp — book services or buy items without extra apps.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Button as="a" href="https://wa.me/254104250912" variant="primary">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
