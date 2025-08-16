import Link from "next/link";

export default function HomePage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 sm:p-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-emerald-900">
            Welcome to Jumuika Hub KE
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-700">
            Jumuika Hub KE is a WhatsApp-first smart business toolkit that
            connects vendors, institutions, and students seamlessly. Real-time
            commerce. No apps needed.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* Primary CTA – services */}
            <Link
              href="https://wa.me/254104250912"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-4 py-2 text-white font-medium hover:bg-emerald-800"
            >
              Book Services via WhatsApp
            </Link>

            {/* Secondary CTA – items */}
            <Link
              href="https://wa.me/254104250912"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-800 font-medium hover:bg-slate-50"
            >
              Buy Items via WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
