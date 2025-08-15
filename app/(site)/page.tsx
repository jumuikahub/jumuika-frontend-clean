// app/(site)/page.tsx
import { Button } from "@/components/ui";

export const metadata = {
  title: "Jumuika Hub KE",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6 sm:p-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-emerald-900 sm:text-5xl">
          Welcome to Jumuika Hub KE
        </h1>

        <p className="mt-4 max-w-3xl text-slate-700">
          Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects vendors,
          institutions, and students seamlessly. Real-time commerce. No apps needed.
        </p>

        <div className="mt-8 flex flex-col items-center justify-start gap-3 sm:flex-row">
          {/* When Button has href, render it as an anchor */}
          <Button
            as="a"
            href="https://wa.me/254104250912"
            target="_blank"
            rel="noopener"
            variant="primary"
          >
            Book Services via WhatsApp
          </Button>

          {/* Second CTA – optional, keep same style for consistency */}
          <Button
            as="a"
            href="https://wa.me/254104250912"
            target="_blank"
            rel="noopener"
          >
            Buy Items via WhatsApp
          </Button>
        </div>
      </section>
    </main>
  );
}
