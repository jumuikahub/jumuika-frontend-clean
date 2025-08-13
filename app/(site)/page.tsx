// app/(site)/page.tsx
import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const revalidate = 0; // make sure CDN doesn’t serve an old HTML copy while we iterate

export default function HomePage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* soft emerald gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-40%,rgba(16,185,129,.20),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
          <h1 className="text-center text-4xl font-extrabold leading-tight tracking-tight text-emerald-900 sm:text-5xl">
            Welcome to Jumuika Hub KE
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-center text-emerald-900/80 sm:text-lg">
            Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects
            vendors, institutions, and students seamlessly. Real-time commerce. No apps
            needed.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://wa.me/254700000000?text=Hi%20Jumuika%20Hub%2C%20I%20want%20to%20book%20a%20service"
              className={cn(
                "inline-flex h-12 items-center rounded-xl bg-emerald-700 px-6 font-semibold text-white",
                "shadow-sm ring-1 ring-emerald-800/20 transition-all hover:bg-emerald-800 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/60",
                "min-w-[260px] justify-center gap-2"
              )}
            >
              <span>Book Services via WhatsApp</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              href="https://wa.me/254700000000?text=Hi%20Jumuika%20Hub%2C%20I%20want%20to%20buy%20items"
              className={cn(
                "inline-flex h-12 items-center rounded-xl bg-emerald-700 px-6 font-semibold text-white",
                "shadow-sm ring-1 ring-emerald-800/20 transition-all hover:bg-emerald-800 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/60",
                "min-w-[260px] justify-center gap-2"
              )}
            >
              <span>Buy Items via WhatsApp</span>
              <ShoppingCart size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
