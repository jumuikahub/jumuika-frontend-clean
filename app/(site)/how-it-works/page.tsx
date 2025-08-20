// app/(site)/how-it-works/page.tsx
import Link from "next/link";
import constants from "@/lib/constants";

export const metadata = {
  title: `How it works • ${constants.BRAND_NAME}`,
  description: constants.TAGLINE,
};

export default function HowItWorksPage() {
  const { BRAND_NAME, TAGLINE, WHATSAPP_CTA_URL, WHATSAPP_BUY_URL } = constants;

  return (
    <section className="border-b bg-gradient-to-b from-emerald-50 to-emerald-100/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h1 className="text-center text-3xl font-semibold tracking-tight sm:text-5xl">
          How {BRAND_NAME} Works
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-zinc-700">
          {TAGLINE}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">1. Onboard</div>
            <p className="mt-2 text-sm text-zinc-600">
              Register and connect your WhatsApp number.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">2. List &amp; Manage</div>
            <p className="mt-2 text-sm text-zinc-600">
              Add products, services, or bookings and manage in real-time.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">3. Connect &amp; Sell</div>
            <p className="mt-2 text-sm text-zinc-600">
              Customers contact you instantly on WhatsApp.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Link href={WHATSAPP_CTA_URL} target="_blank" className="btn-primary">
            Book Services via WhatsApp
          </Link>

          <Link href={WHATSAPP_BUY_URL} target="_blank" className="btn-outline">
            Buy Items via WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
