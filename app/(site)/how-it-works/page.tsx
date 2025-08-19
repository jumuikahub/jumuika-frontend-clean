// app/(site)/how-it-works/page.tsx
import metadata from "./metadata";
import Link from "next/link";

export { metadata };

const WHATSAPP = "https://wa.me/254104250912";

export default function HowItWorksPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900 sm:text-5xl">
          How Jumuika Hub KE Works
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-lg text-emerald-900/80">
          The easiest way for vendors and students to connect, transact, and
          grow — all via WhatsApp.
        </p>

        <div className="mt-10 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "1. Onboard",
              body:
                "Register and connect your WhatsApp number.",
            },
            {
              title: "2. List & Manage",
              body:
                "Add products, services, or bookings and manage in real-time.",
            },
            {
              title: "3. Connect & Sell",
              body:
                "Customers contact you instantly on WhatsApp.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-emerald-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-emerald-900">
                {s.title}
              </h3>
              <p className="mt-2 text-zinc-700">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href={WHATSAPP}
            target="_blank"
            className="inline-flex rounded-full bg-emerald-700 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-800"
          >
            Get Started via WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}
