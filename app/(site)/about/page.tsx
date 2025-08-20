// app/(site)/about/page.tsx
import constants from "@/lib/constants";
const { BRAND_NAME } = constants;

export const metadata = {
  title: `About • ${BRAND_NAME}`,
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="wrap">
        <h1 className="mt-10 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          About {BRAND_NAME}
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-center text-zinc-700">
          We help vendors and students connect and transact seamlessly on WhatsApp. Our mission is
          to enable real-time commerce — no apps, no friction.
        </p>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="info-card">
            <h3 className="font-medium">Simple</h3>
            <p className="mt-2 text-sm text-zinc-700">WhatsApp-first. Start instantly — no app installs.</p>
          </div>
          <div className="info-card">
            <h3 className="font-medium">Reliable</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Real-time interactions that keep your operations moving.
            </p>
          </div>
          <div className="info-card">
            <h3 className="font-medium">Inclusive</h3>
            <p className="mt-2 text-sm text-zinc-700">Designed for vendors and students across Kenya.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
