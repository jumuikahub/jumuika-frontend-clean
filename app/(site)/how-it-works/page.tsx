// app/(site)/how-it-works/page.tsx
import Link from "next/link";
import constants from "@/lib/constants";

const { BRAND_NAME, TAGLINE, WHATSAPP_CTA_URL } = constants;

export const metadata = {
  title: `How it works • ${BRAND_NAME}`,
  description: TAGLINE,
};

export default function HowItWorksPage() {
  return (
    <section className="mx-auto max-w-5xl py-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          How {BRAND_NAME} Works
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-neutral-700">
          The easiest way for vendors and students to connect, transact, and
          grow — all via WhatsApp.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-6 shadow-sm">
          <h3 className="text-lg font-semibold">1. Onboard</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Register and connect your WhatsApp number.
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h3 className="text-lg font-semibold">2. List &amp; Manage</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Add products, services, or bookings and manage in real-time.
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h3 className="text-lg font-semibold">3. Connect &amp; Sell</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Customers contact you instantly on WhatsApp.
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href={WHATSAPP_CTA_URL}
          target="_blank"
          className="rounded-lg bg-primary px-6 py-3 text-white shadow hover:bg-primary/90"
        >
          Get Started via WhatsApp
        </Link>
      </div>
    </section>
  );
}
