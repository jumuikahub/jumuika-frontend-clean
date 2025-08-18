// app/(site)/how-it-works/page.tsx
import PrimaryButton from "@/components/ui/PrimaryButton";
import { WHATSAPP_CTA_URL } from "@/lib/constants";

export const metadata = {
  title: "How it works • Jumuika Hub KE",
};

export default function HowItWorksPage() {
  return (
    <section className="space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          How Jumuika Hub KE Works
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-700">
          The easiest way for vendors and students to connect, transact, and
          grow — all via WhatsApp.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-3">
        {[
          {
            title: "1. Onboard",
            body: "Register and connect your WhatsApp number.",
          },
          {
            title: "2. List & Manage",
            body: "Add products, services, or bookings and manage in real-time.",
          },
          {
            title: "3. Connect & Sell",
            body: "Customers contact you instantly on WhatsApp.",
          },
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-xl border border-zinc-100 bg-white p-5"
          >
            <h3 className="font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-zinc-700">{c.body}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <PrimaryButton href={WHATSAPP_CTA_URL}>
          Get Started via WhatsApp
        </PrimaryButton>
      </div>
    </section>
  );
}
