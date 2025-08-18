// app/(site)/about/page.tsx
import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About • ${SITE_NAME}`,
  description:
    "We help vendors, institutions, and students connect and transact seamlessly on WhatsApp — real-time commerce, no apps, no friction.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="mt-10">
        <h1 className="text-center text-3xl font-semibold sm:text-4xl">
          About {SITE_NAME}
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-center text-zinc-700">
          We help vendors, institutions, and students connect and transact
          seamlessly on WhatsApp. Our mission is to enable real-time commerce —
          no apps, no friction.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border bg-white p-5">
            <h3 className="font-semibold">Simple</h3>
            <p className="mt-2 text-sm text-zinc-600">
              WhatsApp-first. Start instantly — no app installs.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5">
            <h3 className="font-semibold">Reliable</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Real-time interactions that keep your operations moving.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5">
            <h3 className="font-semibold">Inclusive</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Designed for vendors and students across Kenya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
