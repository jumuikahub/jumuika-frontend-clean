import Link from "next/link";
import { WHATSAPP_CTA } from "@/lib/constants";

export const metadata = {
  title: "How Jumuika Hub KE Works",
  description:
    "We connect vendors, institutions, and students through WhatsApp-first, real-time commerce. No apps needed.",
};

export default function HowItWorksPage() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="rounded-3xl border bg-emerald-50/60 p-6 sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">
            How Jumuika Hub KE Works
          </h1>
          <p className="mt-3 text-slate-700">
            We’ve designed Jumuika Hub KE to be the easiest way for vendors,
            institutions, and students to connect, transact, and grow — all via
            WhatsApp. Here’s how it works.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">1. Onboard</h3>
            <p className="mt-2 text-sm text-slate-600">
              Vendors and institutions register through our onboarding form and
              connect their WhatsApp number.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              2. List &amp; Manage
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Add products, services, or bookings to your Jumuika dashboard and
              manage in real-time.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              3. Connect &amp; Sell
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Customers contact you instantly on WhatsApp to book services or
              buy items — no extra apps required.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WHATSAPP_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700"
          >
            Get Started via WhatsApp
          </a>
          <Link
            href="/vendors/dashboard"
            className="rounded-xl border px-5 py-3 text-slate-800 hover:bg-slate-50"
          >
            Open Vendor Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}
