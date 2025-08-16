// app/(site)/page.tsx
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Full-bleed hero band */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-emerald-50/80" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="rounded-3xl bg-white/50 ring-1 ring-emerald-100/60 backdrop-blur-sm p-6 sm:p-8 lg:p-10 shadow-sm">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-emerald-900">
              Welcome to Jumuika Hub KE
            </h1>

            <p className="mt-4 max-w-3xl text-base sm:text-lg text-emerald-900/80">
              Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects
              vendors, institutions, and students seamlessly. Real-time commerce. No apps needed.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {/* CTA 1 — services */}
              <Button as="a" href="https://wa.me/254104250912">
                Book Services via WhatsApp
              </Button>

              {/* CTA 2 — items (keep variant default to avoid union type issues) */}
              <Button as="a" href="https://wa.me/254104250912">
                Buy Items via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
