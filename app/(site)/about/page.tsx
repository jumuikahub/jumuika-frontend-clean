// app/(site)/about/page.tsx
import constants from "@/lib/constants";
const { BRAND, TAGLINE } = constants;

export const metadata = {
  title: `About • ${BRAND}`,
  description: TAGLINE,
};

export default function AboutPage() {
  return (
    <section className="mt-10 rounded-2xl bg-white px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
        About {BRAND}
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-zinc-600">
        {TAGLINE}
      </p>

      <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
        <Card
          title="Simple"
          text="WhatsApp-first. Start instantly — no app installs."
        />
        <Card
          title="Reliable"
          text="Real-time interactions that keep your operations moving."
        />
        <Card
          title="Inclusive"
          text="Built for vendors and students across Kenya."
        />
      </div>
    </section>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{text}</p>
    </div>
  );
}
