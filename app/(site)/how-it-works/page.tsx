// app/(site)/how-it-works/page.tsx
import Link from "next/link";
import { BRAND, WHATSAPP_CTA_URL } from "@/lib/constants";

export const metadata = {
  title: `How it works • ${BRAND.name}`,
  description: "The easiest way for vendors and students to transact via WhatsApp.",
};

export default function HowItWorksPage() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="my-8 rounded-2xl border bg-emerald-50 p-8 text-center md:my-10 md:p-12">
        <h1 className="text-3xl font-bold text-emerald-900 md:text-4xl">
          How {BRAND.name} Works
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-emerald-900/90">
          Connect, list, and sell — all via WhatsApp.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold text-zinc-900">1. Onboard</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Register and connect your WhatsApp number.
          </p>
        </div>
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold text-zinc-900">2. List & Manage</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Add products, services, or bookings and manage in real-time.
          </p>
        </div>
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold text-zinc-900">3. Connect & Sell</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Customers contact you instantly on WhatsApp.
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href={WHATSAPP_CTA_URL}
          target="_blank"
          className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Get Started via WhatsApp
        </Link>
      </div>
    </section>
  );
}
