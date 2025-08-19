// app/(site)/about/page.tsx
import { BRAND_NAME } from "@/lib/constants";

export const metadata = {
  title: `About • ${BRAND_NAME}`,
  description:
    "We help vendors and students connect and transact seamlessly on WhatsApp — real-time commerce, no apps.",
};

const Card = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft">
    <h3 className="font-heading text-lg text-zinc-900">{title}</h3>
    <p className="mt-2 text-zinc-700">{children}</p>
  </div>
);

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-brand/10 via-brand/5 to-transparent">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-center font-heading text-4xl tracking-tight text-brand-dark">
          About {BRAND_NAME}
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-center text-zinc-700">
          We help vendors and students connect and transact seamlessly on
          WhatsApp. Our mission is to enable real-time commerce — no apps, no
          friction.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Card title="Simple">
            WhatsApp-first. Start instantly — no app installs.
          </Card>
          <Card title="Reliable">
            Real-time interactions that keep your operations moving.
          </Card>
          <Card title="Inclusive">Designed for vendors and students.</Card>
        </div>
      </div>
    </section>
  );
}
