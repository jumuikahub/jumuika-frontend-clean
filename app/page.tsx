// app/page.tsx
import type { Metadata } from "next";

// Optional: if you prefer per-page metadata (you already have global in (site)/layout)
export const metadata: Metadata = {
  title: "Jumuika Hub KE – WhatsApp-First Smart Business Toolkit",
  description:
    "WhatsApp-first smart business toolkit that connects vendors, institutions and students seamlessly. Real-time commerce. No apps needed.",
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "254104250912";
const waBase = `https://wa.me/${WA}`;

export default function Home() {
  const bookUrl =
    waBase +
    "?text=" +
    encodeURIComponent("Hello Jumuika Hub KE – I want to book services.");
  const buyUrl =
    waBase +
    "?text=" +
    encodeURIComponent("Hello Jumuika Hub KE – I want to buy items.");

  return (
    <main className="min-h-[calc(100vh-3.5rem)] bg-gradient-to-b from-emerald-50/80 via-emerald-50/30 to-white">
      {/* centered container */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-12 sm:py-16 md:py-20">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-900">
          Welcome to Jumuika Hub KE
        </h1>

        <p className="mt-4 max-w-2xl text-center text-slate-600">
          Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects
          vendors, institutions, and students seamlessly. Real-time commerce. No
          apps needed.
        </p>

        <div className="mt-6 flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={bookUrl}
            aria-label="Book services via WhatsApp"
            className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-xl bg-emerald-700 px-5 font-semibold text-white shadow-sm hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            Book Services via WhatsApp
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </a>

          <a
            href={buyUrl}
            aria-label="Buy items via WhatsApp"
            className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-xl bg-emerald-700 px-5 font-semibold text-white shadow-sm hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            Buy Items via WhatsApp
            <svg
              aria-hidden="true"
              className="ml-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l1.6-6H6.4M7 13l-1.293 3.879A1 1 0 006.667 19h10.666"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* optional decorative radial mist for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="mx-auto h-64 w-64 translate-y-10 rounded-full bg-emerald-300/20 blur-3xl sm:h-80 sm:w-80" />
      </div>
    </main>
  );
}
