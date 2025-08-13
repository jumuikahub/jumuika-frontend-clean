'use client';

import Link from 'next/link';
import { ArrowRight, ShoppingCart } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="relative isolate overflow-hidden"
      >
        {/* Soft emerald gradient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_800px_at_50%_-200px,rgba(16,185,129,0.18),transparent),linear-gradient(to_bottom,#ecfdf5,transparent_35%)]"
        />

        <div className="mx-auto max-w-5xl px-4 py-20 sm:py-24 lg:py-28">
          <h1
            id="hero-heading"
            className="text-center text-4xl font-extrabold tracking-tight text-emerald-900 sm:text-5xl"
          >
            Welcome to Jumuika Hub KE
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-7 text-slate-700">
            Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects
            vendors, institutions, and students seamlessly. Real-time commerce.
            No apps needed.
          </p>

          {/* CTA buttons — consistent sizing & styles */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="https://wa.me/254700000000?text=I'd%20like%20to%20book%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-xl bg-emerald-800 px-5 font-medium text-white shadow-sm hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-900"
            >
              Book Services via WhatsApp
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="https://wa.me/254700000000?text=I'd%20like%20to%20buy%20items"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-xl border border-emerald-900/15 bg-white px-5 font-medium text-emerald-900 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-900"
            >
              Buy Items via WhatsApp
              <ShoppingCart className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
