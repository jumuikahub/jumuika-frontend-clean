// app/(site)/how-it-works/page.tsx
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
      <section className="rounded-3xl bg-emerald-50 ring-1 ring-emerald-100/80 px-5 sm:px-8 md:px-10 py-8 md:py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-900">
          How Jumuika Hub KE Works
        </h1>

        <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
          We’ve designed Jumuika Hub KE to be the easiest way for vendors, institutions, and
          students to connect, transact, and grow — all via WhatsApp. Here’s how it works:
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-white ring-1 ring-emerald-100 p-5">
            <h3 className="font-semibold text-emerald-900">1. Onboard</h3>
            <p className="mt-2 text-sm text-slate-700">
              Vendors and institutions register through our onboarding form and connect their WhatsApp number.
            </p>
          </div>

          <div className="rounded-2xl bg-white ring-1 ring-emerald-100 p-5">
            <h3 className="font-semibold text-emerald-900">2. List &amp; Manage</h3>
            <p className="mt-2 text-sm text-slate-700">
              Add products, services, or bookings directly to your Jumuika dashboard and manage in real-time.
            </p>
          </div>

          <div className="rounded-2xl bg-white ring-1 ring-emerald-100 p-5">
            <h3 className="font-semibold text-emerald-900">3. Connect &amp; Sell</h3>
            <p className="mt-2 text-sm text-slate-700">
              Customers contact you instantly via WhatsApp — book services or buy items without downloading extra apps.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/internlink/onboard"
            className="inline-flex h-11 items-center rounded-lg bg-emerald-700 px-4 text-white font-medium hover:bg-emerald-800"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
