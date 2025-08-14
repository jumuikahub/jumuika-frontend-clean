import { Button } from '@/components/ui';

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-emerald-900">
          How Jumuika Hub KE Works
        </h1>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold text-emerald-900">1. Onboard</h2>
            <p className="mt-2 text-zinc-700">
              Vendors and institutions register and connect their WhatsApp number.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold text-emerald-900">2. List &amp; Manage</h2>
            <p className="mt-2 text-zinc-700">
              Add products, services, or bookings and manage them in real-time.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold text-emerald-900">3. Connect &amp; Sell</h2>
            <p className="mt-2 text-zinc-700">
              Customers contact you instantly via WhatsApp. Zero extra apps.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/internlink" variant="primary">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
}
