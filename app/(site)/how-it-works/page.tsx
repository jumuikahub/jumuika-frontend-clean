// app/(site)/how-it-works/page.tsx
import Link from "next/link";
import constants from "@/lib/constants";

const { BRAND, TAGLINE, WHATSAPP_CTA_URL, WHATSAPP_BUY_URL } = constants;

export const metadata = {
  title: `How it works • ${BRAND}`,
  description: TAGLINE,
};

const steps = [
  {
    title: "1. Onboard",
    text: "Register and connect your WhatsApp number.",
  },
  {
    title: "2. List & Manage",
    text: "Add products, services, or bookings and manage in real-time.",
  },
  {
    title: "3. Connect & Sell",
    text: "Customers contact you instantly on WhatsApp.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="hero">
      <h1 className="hero-title">How {BRAND} Works</h1>
      <p className="hero-sub">{TAGLINE}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {steps.map((s) => (
          <div key={s.title} className="card">
            <h3 className="font-semibold text-zinc-900">{s.title}</h3>
            <p className="mt-2 text-zinc-600">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="hero-cta">
        <Link href={WHATSAPP_CTA_URL} className="btn-primary">
          Book Services via WhatsApp
        </Link>
        <Link href={WHATSAPP_BUY_URL} className="btn-outline">
          Buy Items via WhatsApp
        </Link>
      </div>
    </div>
  );
}
