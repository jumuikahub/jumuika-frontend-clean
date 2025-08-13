// app/(site)/page.tsx
import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative">
        {/* background gradient */}
        <div
          className="
            pointer-events-none absolute inset-0 -z-10
            bg-gradient-to-b from-emerald-100 to-transparent
            [mask-image:radial-gradient(1200px_600px_at_50%_0%,black,transparent)]
            sm:[mask-image:radial-gradient(1400px_700px_at_50%_0%,black,transparent)]
          "
          aria-hidden="true"
        />
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 lg:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-emerald-900">
            Welcome to Jumuika Hub KE
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-slate-600">
            Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects
            vendors, institutions, and students seamlessly. Real-time commerce. No apps needed.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://wa.me/254700000000?text=Hi%20Jumuika%20Hub%20KE%2C%20I%20want%20to%20book%20services"
              className="
                group inline-flex items-center justify-center gap-2
                rounded-xl bg-emerald-700 px-5 py-3 text-white
                shadow-sm transition-all hover:bg-emerald-800
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/60
              "
            >
              <span>Book Services via WhatsApp</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="https://wa.me/254700000000?text=Hi%20Jumuika%20Hub%20KE%2C%20I%20want%20to%20buy%20items"
              className="
                group inline-flex items-center justify-center gap-2
                rounded-xl border border-emerald-700/60 px-5 py-3
                text-emerald-800 transition-all hover:bg-emerald-50
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/60
              "
            >
              <span>Buy Items via WhatsApp</span>
              <ShoppingCart className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
