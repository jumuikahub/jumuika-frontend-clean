// app/(site)/how-it-works/page.tsx
import Section from "@/components/layout/Section";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

export const metadata = {
  title: "How it works • Jumuika Hub KE",
  description: "A quick look at the Jumuika Hub flow on WhatsApp.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Section className="pt-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-emerald-900">
          How Jumuika Hub KE Works
        </h1>
        <p className="mt-4 max-w-3xl text-emerald-900/80">
          We’ve designed Jumuika Hub KE to make it easy to connect and transact
          via WhatsApp — without additional apps.
        </p>
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-emerald-900/10 p-5">
            <h3 className="font-semibold text-emerald-900">1. Onboard</h3>
            <p className="mt-2 text-sm text-emerald-900/80">
              Vendors register and connect their WhatsApp number.
            </p>
          </div>

          <div className="rounded-xl border border-emerald-900/10 p-5">
            <h3 className="font-semibold text-emerald-900">2. List & Manage</h3>
            <p className="mt-2 text-sm text-emerald-900/80">
              Add products or services, manage orders in real time.
            </p>
          </div>

          <div className="rounded-xl border border-emerald-900/10 p-5">
            <h3 className="font-semibold text-emerald-900">3. Connect & Sell</h3>
            <p className="mt-2 text-sm text-emerald-900/80">
              Customers message you on WhatsApp — no extra apps required.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <WhatsAppCTA>Get Started on WhatsApp</WhatsAppCTA>
        </div>
      </Section>
    </>
  );
}
