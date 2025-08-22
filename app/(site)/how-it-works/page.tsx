import PrimaryCTAs from "@/components/ui/PrimaryCTAs";
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: `How it works • ${BRAND}`,
};

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-2xl border bg-white p-5 shadow-sm">
    <h3 className="mb-2 font-semibold">{title}</h3>
    <p className="text-sm text-neutral-700">{children}</p>
  </div>
);

export default function HowItWorksPage() {
  return (
    <main className="mx-auto max-w-7xl px-4">
      <section className="my-12 rounded-2xl bg-emerald-50/60 p-8 md:my-16 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl">
            How {BRAND} Works
          </h1>
          <p className="mt-4 text-base text-neutral-700 md:text-lg">
            WhatsApp-first smart business toolkit for vendors &amp; institutions —
            simple listings, instant WhatsApp orders, and real-time engagement.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:mt-10 md:grid-cols-3">
          <Card title="1. Onboard">
            Register and connect your WhatsApp number.
          </Card>
          <Card title="2. List & Manage">
            Add products, services, or bookings and manage in real-time.
          </Card>
          <Card title="3. Connect & Sell">
            Customers contact you instantly on WhatsApp.
          </Card>
        </div>

        <div className="mt-8 flex justify-center">
          <PrimaryCTAs />
        </div>
      </section>
    </main>
  );
}
