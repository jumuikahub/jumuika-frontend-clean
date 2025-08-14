// app/(site)/how-it-works/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui";

export const metadata = {
  title: "How Jumuika Hub KE Works",
  description:
    "Onboard, list & manage, and connect — all via WhatsApp. Zero apps to install.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-[60vh] bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        <h1 className="text-center text-4xl font-bold tracking-tight text-emerald-900 sm:text-5xl">
          How Jumuika Hub KE Works
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-emerald-900/80">
          We’ve designed Jumuika Hub KE to be the easiest way for vendors,
          institutions, and students to connect, transact, and grow — all via
          WhatsApp. Here’s how it works:
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-emerald-200/60 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-emerald-900">1. Onboard</h2>
            <p className="mt-2 text-emerald-900/80">
              Vendors and institutions register through our onboarding form and
              connect their WhatsApp number.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200/60 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-emerald-900">
              2. List &amp; Manage
            </h2>
            <p className="mt-2 text-emerald-900/80">
              Add your products, services, or bookings directly to your Jumuika
              dashboard and manage in real-time.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200/60 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-emerald-900">
              3. Connect &amp; Sell
            </h2>
            <p className="mt-2 text-emerald-900/80">
              Customers contact you instantly via WhatsApp, book services, or
              buy items without downloading any extra app.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          {/* Use the anchor variant of Button instead of asChild */}
          <Button as="a" href="/internlink">
            Get Started Now
          </Button>
        </div>
      </div>
    </main>
  );
}
