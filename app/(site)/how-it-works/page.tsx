import constants from '@/lib/constants';

export const metadata = {
  title: `How it works • ${constants.BRAND}`,
  description: constants.TAGLINE,
};

export default function HowItWorksPage() {
  const { TAGLINE, WHATSAPP_CTA_URL, WHATSAPP_BUY_URL } = constants;

  return (
    <section className="my-10">
      <div className="rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-600/10 sm:p-10">
        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
          How {constants.BRAND} Works
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-zinc-700">
          {TAGLINE}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="font-semibold">1. Onboard</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Register and connect your WhatsApp number.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="font-semibold">2. List & Manage</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Add products, services, or bookings and manage in real-time.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="font-semibold">3. Connect & Sell</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Customers contact you instantly on WhatsApp.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href={WHATSAPP_CTA_URL}
            target="_blank"
            className="btn-primary"
          >
            Book Services via WhatsApp
          </a>
          <a
            href={WHATSAPP_BUY_URL}
            target="_blank"
            className="btn-outline"
          >
            Buy Items via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
