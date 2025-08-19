// app/(site)/how-it-works/page.tsx
import Link from "next/link";
import { BRAND_NAME, WHATSAPP_CTA_URL } from "@/lib/constants";

export const metadata = {
  title: `How it works • ${BRAND_NAME}`,
  description: "The fast way for vendors and students to connect — via WhatsApp.",
};

const Step = ({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft">
    <h3 className="font-heading text-lg text-zinc-900">
      {n}. {title}
    </h3>
    <p className="mt-2 text-zinc-700">{children}</p>
  </div>
);

export default function HowItWorksPage() {
  return (
    <section className="bg-gradient-to-b from-brand/10 via-brand/5 to-transparent">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-center font-heading text-4xl tracking-tight text-brand-dark">
          How {BRAND_NAME} Works
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-center text-zinc-700">
          The easiest way for vendors and students to connect, transact, and
          grow — all via WhatsApp.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Step n={1} title="Onboard">
            Register and connect your WhatsApp number.
          </Step>
          <Step n={2} title="List & Manage">
            Add products, services, or bookings and manage in real-time.
          </Step>
          <Step n={3} title="Connect & Sell">
            Customers contact you instantly on WhatsApp.
          </Step>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={WHATSAPP_CTA_URL}
            target="_blank"
            className="inline-flex items-center justify-center rounded-xl bg-brand px-5 py-3 text-sm font-medium text-white shadow-soft transition-all hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand/30"
          >
            Get Started via WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
