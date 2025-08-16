// app/(site)/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
      <section className="rounded-3xl bg-emerald-50 ring-1 ring-emerald-100/80 px-5 sm:px-8 md:px-10 py-8 md:py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-900">
          Welcome to Jumuika Hub KE
        </h1>

        <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
          Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects vendors,
          institutions, and students seamlessly. Real-time commerce. No apps needed.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href="https://wa.me/254104250912"
            target="_blank"
            rel="noopener"
            className="inline-flex h-11 items-center rounded-lg bg-emerald-700 px-4 text-white font-medium hover:bg-emerald-800"
          >
            Book Services via WhatsApp
          </Link>
          <Link
            href="https://wa.me/254104250912"
            target="_blank"
            rel="noopener"
            className="inline-flex h-11 items-center rounded-lg border border-emerald-700/40 px-4 text-emerald-800 font-medium hover:bg-emerald-50"
          >
            Buy Items via WhatsApp
          </Link>
        </div>
      </section>
    </div>
  );
}
