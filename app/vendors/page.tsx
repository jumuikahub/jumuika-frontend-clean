// app/vendors/page.tsx
import Link from "next/link";
import { Metadata } from "next";
import Section from "@/components/layout/Section";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { WHATSAPP_CTA_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vendors • Jumuika Hub KE",
  description:
    "A lightweight dashboard for vendors to list products/services and chat with customers on WhatsApp — in real time.",
};

export default function VendorsLanding() {
  return (
    <main className="min-h-[70vh]">
      <Section className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-emerald-900">
          Jumuika Manager
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600">
          A lightweight dashboard to manage listings, orders, and messaging —
          while customers interact on WhatsApp. Real-time, no apps needed.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton href="/vendors/dashboard">
            Open Vendor Dashboard
          </PrimaryButton>

          <PrimaryButton href={WHATSAPP_CTA_URL} intent="outline">
            Request Access via WhatsApp
          </PrimaryButton>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3 text-left">
          <div className="rounded-2xl border border-emerald-200 bg-white p-5">
            <h3 className="font-medium text-emerald-800">
              List Products & Services
            </h3>
            <p className="mt-2 text-slate-600">
              Create and update listings on the fly.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-white p-5">
            <h3 className="font-medium text-emerald-800">Orders in Real-time</h3>
            <p className="mt-2 text-slate-600">
              Track bookings and purchases instantly.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-white p-5">
            <h3 className="font-medium text-emerald-800">Smart Messaging</h3>
            <p className="mt-2 text-slate-600">
              Confirm, remind, and follow-up on WhatsApp.
            </p>
          </div>
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Prefer to talk to us?{" "}
          <Link
            href={WHATSAPP_CTA_URL}
            className="underline decoration-emerald-400 hover:text-emerald-700"
          >
            Chat on WhatsApp
          </Link>
          .
        </p>
      </Section>
    </main>
  );
}
