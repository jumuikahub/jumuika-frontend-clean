import { Button } from '@/components/ui';

export default function HowItWorksPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="rounded-3xl bg-emerald-50 p-8 sm:p-12">
        <h1 className="text-4xl font-extrabold leading-tight text-emerald-900 sm:text-5xl">
          How Jumuika Hub KE Works
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-emerald-900/80">
          We’ve designed Jumuika Hub KE to be the easiest way for vendors, institutions, and
          students to connect, transact, and grow — all via WhatsApp. Here’s how it works:
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-emerald-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-emerald-900">1. Onboard</h3>
            <p className="mt-2 text-emerald-900/80">
              Vendors and institutions register through our onboarding form and connect their
              WhatsApp number.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-emerald-900">2. List &amp; Manage</h3>
            <p className="mt-2 text-emerald-900/80">
              Add your products, services, or bookings directly to your Jumuika dashboard and manage
              in real-time.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-emerald-900">3. Connect &amp; Sell</h3>
            <p className="mt-2 text-emerald-900/80">
              Customers contact you instantly via WhatsApp, book services, or buy items without
              downloading any extra app.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          {/* Internal route CTA as anchor */}
          <Button as="a" href="/internlink" variant="primary">
            Get Started Now
          </Button>
        </div>
      </section>
    </main>
  );
}
