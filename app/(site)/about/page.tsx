// app/(site)/about/page.tsx
import constants from "@/lib/constants";

const { BRAND_NAME, TAGLINE } = constants;

export const metadata = {
  title: `About • ${BRAND_NAME}`,
  description: TAGLINE,
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl py-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold md:text-5xl">About {BRAND_NAME}</h1>
        <p className="mx-auto mt-4 max-w-3xl text-neutral-700">{TAGLINE}</p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Simple</h3>
          <p className="mt-2 text-sm text-neutral-700">
            WhatsApp-first. Start instantly — no app installs.
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Reliable</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Real-time interactions that keep your operations moving.
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Inclusive</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Built for vendors and students across Kenya.
          </p>
        </div>
      </div>
    </section>
  );
}
