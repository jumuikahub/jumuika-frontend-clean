// app/(site)/how-it-works/page.tsx
import Container from "@/components/layout/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

export const metadata = {
  title: "How it works (Vendors) | Jumuika Hub KE",
  description:
    "The quickest way for vendors to list, sell, and message customers — all via WhatsApp.",
};

const STEPS = [
  {
    title: "1. Onboard",
    body:
      "Register your business and confirm your WhatsApp number. No apps to install.",
  },
  {
    title: "2. List & Manage",
    body:
      "Create services, products, or bookings. Manage everything in real-time.",
  },
  {
    title: "3. Connect & Sell",
    body:
      "Customers contact you instantly on WhatsApp — book services or buy items without extra apps.",
  },
];

export default function HowItWorksPage() {
  return (
    <section className="w-full bg-white">
      <Container>
        <div className="mx-auto max-w-4xl py-14 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            How Jumuika Hub KE Works
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            The easiest way for vendors to connect, transact, and grow —
            all via WhatsApp.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 pb-10 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="pb-14 text-center">
          <PrimaryButton label="Get Started via WhatsApp" />
        </div>
      </Container>
    </section>
  );
}
