// app/(site)/how-it-works/page.tsx
import PrimaryCTAs from "@/components/ui/PrimaryCTAs";

export const metadata = {
  title: "How it works • Jumuika Hub KE",
};

export default function HowItWorksPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="rounded-3xl bg-brand-50 ring-1 ring-brand-100/60 px-6 sm:px-10 py-12 sm:py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          How Jumuika Hub KE Works
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          WhatsApp-first smart business toolkit for vendors & institutions — simple
          listings, instant WhatsApp orders, and real-time engagement.
        </p>

        <div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-3 text-left">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">1. Onboard</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Register and connect your WhatsApp number.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">2. List &amp; Manage</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Add products, services, or bookings and manage in real-time.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">3. Connect &amp; Sell</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Customers contact you instantly on WhatsApp.
            </p>
          </div>
        </div>

        <PrimaryCTAs />
      </div>
    </section>
  );
}
