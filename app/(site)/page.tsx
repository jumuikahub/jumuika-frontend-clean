// app/(site)/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui";

export default function HomePage() {
  return (
    <section className="bg-emerald-50/70 min-h-[calc(100vh-200px)] flex items-center">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-emerald-900">
          Welcome to Jumuika Hub KE
        </h1>

        <p className="mt-4 max-w-3xl text-slate-700 text-base sm:text-lg">
          Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects vendors,
          institutions, and students seamlessly. Real-time commerce. No apps needed.
        </p>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
          <Button as="a" href="https://wa.me/254104250912" target="_blank" rel="noopener" variant="primary">
            Book Services via WhatsApp
          </Button>
          <Link
            href="/internlink"
            className="inline-flex h-10 items-center justify-center rounded-md border border-emerald-700 px-4 text-sm font-medium text-emerald-800 hover:bg-emerald-50"
          >
            InternLink
          </Link>
        </div>
      </div>
    </section>
  );
}
