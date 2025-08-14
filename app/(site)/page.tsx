import { Button } from '@/components/ui';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 sm:p-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-emerald-900">
            Welcome to Jumuika Hub KE
          </h1>

          <p className="mt-4 max-w-3xl text-zinc-700">
            Jumuika Hub KE is a WhatsApp-first smart business toolkit that
            connects vendors, institutions, and students seamlessly.
            Real-time commerce. No apps needed.
          </p>

          <div className="mt-8 flex flex-col items-center justify-start gap-3 sm:flex-row">
            <Button
              href="https://wa.me/254104250912"
              target="_blank"
              rel="noopener"
              variant="primary"
            >
              Book Services via WhatsApp
            </Button>

            <Button
              href="/internlink"
              variant="secondary"
            >
              Buy Items via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
