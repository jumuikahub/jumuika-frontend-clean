// app/(site)/how-it-works/page.tsx
import Link from "next/link";
import Container from "@/components/Container";

export default function HowItWorksPage() {
  return (
    <section className="py-4 sm:py-6">
      <div className="bg-emerald-50 ring-1 ring-emerald-100/60">
        <Container className="py-10 sm:py-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-emerald-900 sm:text-4xl">
            How Jumuika Hub KE Works
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
            We’ve designed Jumuika Hub KE to be the easiest way for vendors, institutions,
            and students to connect, transact, and grow — all via WhatsApp. Here’s how it works:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-emerald-100 bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-base font-semibold text-slate-900">1. Onboard</h3>
              <p className="text-sm leading-6 text-slate-700">
                Vendors and institutions register through our onboarding form and connect
                their WhatsApp number.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-100 bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-base font-semibold text-slate-900">2. List &amp; Manage</h3>
              <p className="text-sm leading-6 text-slate-700">
                Add your products, services, or bookings directly to your Jumuika dashboard
                and manage in real-time.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-100 bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-base font-semibold text-slate-900">3. Connect &amp; Sell</h3>
              <p className="text-sm leading-6 text-slate-700">
                Customers contact you instantly via WhatsApp — book services or buy items
                without downloading any extra apps.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/internlink/onboard"
              className="inline-flex items-center rounded-md bg-emerald-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            >
              Get Started Now
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
