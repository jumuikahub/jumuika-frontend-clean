// app/(site)/about/page.tsx
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: `About • ${BRAND.name}`,
  description: BRAND.tagline,
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="my-8 rounded-2xl border bg-emerald-50 p-8 text-center md:my-10 md:p-12">
        <h1 className="text-3xl font-bold text-emerald-900 md:text-4xl">
          About {BRAND.name}
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-emerald-900/90">
          We help vendors and students connect and transact on WhatsApp —
          real-time commerce with zero app installs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold text-zinc-900">Simple</h3>
          <p className="mt-2 text-sm text-zinc-600">
            WhatsApp-first. Start instantly — no app installs.
          </p>
        </div>
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold text-zinc-900">Reliable</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Real-time interactions that keep your operations moving.
          </p>
        </div>
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold text-zinc-900">Inclusive</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Designed for vendors and students across Kenya.
          </p>
        </div>
      </div>
    </section>
  );
}
