// app/(site)/how-it-works/page.tsx
import type { Metadata } from "next";
import { SITE_NAME, WHATSAPP_CTA_URL } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `How it works • ${SITE_NAME}`,
  description:
    "The 3-step flow for vendors and customers on WhatsApp — onboard, list & manage, connect & sell.",
};

export default function HowItWorksPage() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="mt-10 rounded-2xl border bg-emerald-50/60 p-6 sm:p-10">
        <h1 className="text-center text-3xl font-semibold sm:text-4xl">
          How {SITE_NAME} Works
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-center text-zinc-700">
          The easiest way for vendors and students to connect, transact, and
          grow — all via WhatsApp.
        </p>

        <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-3">
          <div className="rounded-xl border bg-white p-5">
            <h3 className="font-semibold">1. Onboard</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Register and connect your WhatsApp number.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5">
            <h3 className="font-semibold">2. List & Manage</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Add products, services, or bookings and manage in real-time.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5">
            <h3 className="font-semibold">3. Connect & Sell</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Customers contact you instantly on WhatsApp.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href={WHATSAPP_CTA_URL}
            className="inline-flex rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Get Started via WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
