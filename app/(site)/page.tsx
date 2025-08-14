// app/(site)/page.tsx
import React from 'react';
import { Button } from '@/components/ui';

export const metadata = {
  title: 'Jumuika Hub KE',
  description:
    'WhatsApp-first smart business toolkit that connects vendors, institutions, and students seamlessly. Real-time commerce. No apps needed.',
};

export default function HomePage() {
  return (
    <main className="relative">
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-16">
        <div className="rounded-3xl bg-emerald-50/70 p-6 sm:p-10 ring-1 ring-emerald-100">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-emerald-900">
            Welcome to Jumuika Hub KE
          </h1>

          <p className="mt-4 max-w-3xl text-emerald-900/80 sm:text-lg">
            Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects vendors,
            institutions, and students seamlessly. Real-time commerce. No apps needed.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* Book Services via WhatsApp */}
            <Button
              as="a"
              href="https://wa.me/254104250912?text=Hi%20Jumuika%20Hub%20KE%2C%20I%27d%20like%20to%20book%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[270px]"
            >
              Book Services via WhatsApp
            </Button>

            {/* Buy Items via WhatsApp */}
            <Button
              as="a"
              href="https://wa.me/254104250912?text=Hi%20Jumuika%20Hub%20KE%2C%20I%27d%20like%20to%20buy%20items."
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[270px] bg-white text-emerald-800 hover:bg-emerald-100 ring-1 ring-emerald-200"
            >
              Buy Items via WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
