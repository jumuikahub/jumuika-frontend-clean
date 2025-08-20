// app/(site)/how-it-works/page.tsx
import Link from "next/link";
import constants from "@/lib/constants";
const { BRAND, TAGLINE, WHATSAPP_CTA_URL, WHATSAPP_BUY_URL } = constants;

export const metadata = {
  title: `How it works • ${BRAND}`,
  description: TAGLINE,
};

export default function HowItWorksPage() {
  return (
    <section className="mt-10 rounded-2xl bg-brand-50 px-4 py-14 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        How {BRAND} Works
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-lg text-zinc-600">{TAGLINE}</p>

      <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
        <Card
          title="1. Onboard"
          text="Register and connect your WhatsApp number."
        />
        <Card
          title="2. List & Manage"
          text="Add products, services, or bookings and manage in real-time."
        />
        <Card
          title="3. Connect & Sell"
          text="Customers contact you instantly on WhatsApp."
        />
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href={WHATSAPP_CTA_URL} className="btn-primary" target="_blank">
          Book Services via WhatsApp
        </Link>
        <Link href={WHATSAPP_BUY_URL} className="btn-outline" target="_blank">
          Buy Items via WhatsApp
        </Link>
      </div>
    </section>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-left shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{text}</p>
    </div>
  );
}
