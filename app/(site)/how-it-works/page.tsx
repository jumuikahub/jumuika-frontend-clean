import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

export const metadata = {
  title: "How It Works | Jumuika Hub KE",
  description:
    "Learn how Jumuika Hub KE helps vendors, institutions, and students connect seamlessly via WhatsApp.",
};

export default function HowItWorks() {
  return (
    <main className="relative min-h-screen px-6 py-12 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-emerald-50 via-white to-emerald-100"
      />

      <h1 className="text-4xl sm:text-5xl font-bold text-emerald-900">
        How Jumuika Hub KE Works
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
        We’ve designed Jumuika Hub KE to be the easiest way for vendors,
        institutions, and students to connect, transact, and grow — all via
        WhatsApp. Here’s how it works:
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        <div className="rounded-xl bg-white shadow-sm border p-6">
          <h3 className="text-xl font-semibold text-emerald-800">1. Onboard</h3>
          <p className="mt-2 text-sm text-gray-600">
            Vendors and institutions register through our onboarding form and
            connect their WhatsApp number.
          </p>
        </div>

        <div className="rounded-xl bg-white shadow-sm border p-6">
          <h3 className="text-xl font-semibold text-emerald-800">
            2. List & Manage
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Add products, services, or bookings to your Jumuika dashboard and
            manage in real time.
          </p>
        </div>

        <div className="rounded-xl bg-white shadow-sm border p-6">
          <h3 className="text-xl font-semibold text-emerald-800">
            3. Connect & Sell
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Customers message you instantly on WhatsApp, book services, or buy
            items — no extra app needed.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <Link href="/" className="inline-block">
          <Button
            variant="emerald"
            className="h-11 px-6 rounded-xl shadow-sm hover:shadow-md hover:shadow-emerald-900/10"
          >
            <span className="mr-2">Get Started Now</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
