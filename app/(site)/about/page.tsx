// app/(site)/about/page.tsx
import Section from "@/components/layout/Section";

export const metadata = {
  title: "About • Jumuika Hub KE",
  description:
    "We enable real-time commerce on WhatsApp — designed for vendors and students across Kenya.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-emerald-900">
          About Jumuika Hub KE
        </h1>
        <p className="mt-4 max-w-3xl text-emerald-900/80">
          We help vendors and students connect and transact seamlessly on
          WhatsApp. Our mission is to make real-time commerce possible — no apps,
          no friction.
        </p>
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-emerald-900/10 p-5">
            <h3 className="font-semibold text-emerald-900">Simple</h3>
            <p className="mt-2 text-sm text-emerald-900/80">
              WhatsApp-first. Start instantly — no app installs.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-900/10 p-5">
            <h3 className="font-semibold text-emerald-900">Reliable</h3>
            <p className="mt-2 text-sm text-emerald-900/80">
              Real-time interactions that keep your operations moving.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-900/10 p-5">
            <h3 className="font-semibold text-emerald-900">Inclusive</h3>
            <p className="mt-2 text-sm text-emerald-900/80">
              Designed for vendors and students across Kenya.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
