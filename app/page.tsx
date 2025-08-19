// app/page.tsx
import Link from "next/link";

const WA_URL = "https://wa.me/254104250912";

export const metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <section className="bg-emerald-50/60 py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900 sm:text-5xl">
          Welcome to Jumuika Hub KE
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-emerald-900/80">
          WhatsApp-first toolkit for vendors and students to connect, transact,
          and grow — no apps, no friction.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={WA_URL}
            target="_blank"
            className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white shadow-sm transition hover:bg-emerald-700"
          >
            Book Services via WhatsApp
          </Link>

          <Link
            href={WA_URL}
            target="_blank"
            className="inline-flex items-center rounded-full border border-emerald-300 bg-white px-6 py-3 text-emerald-700 transition hover:bg-emerald-50"
          >
            Buy Items via WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
