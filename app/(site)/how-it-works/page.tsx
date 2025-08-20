// app/(site)/how-it-works/page.tsx
import Link from "next/link";
import constants from "@/lib/constants";

const { BRAND_NAME, WHATSAPP_CTA_URL } = constants;

export const metadata = {
  title: `How it works • ${BRAND_NAME}`,
};

export default function HowItWorksPage() {
  return (
    <section className="section">
      <div className="wrap">
        <h1 className="mt-10 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          How {BRAND_NAME} Works
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-center text-zinc-700">
          The easiest way for vendors and students to connect, transact, and grow — all via WhatsApp.
        </p>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="info-card">
            <h3 className="font-medium">1. Onboard</h3>
            <p className="mt-2 text-sm text-zinc-700">Register and connect your WhatsApp number.</p>
          </div>
          <div className="info-card">
            <h3 className="font-medium">2. List &amp; Manage</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Add products, services, or bookings and manage in real-time.
            </p>
          </div>
          <div className="info-card">
            <h3 className="font-medium">3. Connect &amp; Sell</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Customers contact you instantly on WhatsApp.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href={WHATSAPP_CTA_URL} target="_blank" className="btn-primary">
            Get Started via WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
