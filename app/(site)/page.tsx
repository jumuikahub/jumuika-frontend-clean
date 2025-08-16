// app/(site)/page.tsx
import Link from "next/link";
import Container from "@/components/Container";

export default function HomePage() {
  return (
    <>
      {/* Full‑width hero stripe; content centered via Container */}
      <section className="py-6 sm:py-8">
        <div className="mx-auto w-full max-w-none rounded-none bg-emerald-50 ring-1 ring-emerald-100/60">
          <Container className="py-10 sm:py-12">
            <h1 className="text-3xl font-extrabold tracking-tight text-emerald-900 sm:text-4xl">
              Welcome to Jumuika Hub KE
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
              Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects vendors,
              institutions, and students seamlessly. Real-time commerce. No apps needed.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/254104250912"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-emerald-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                Book Services via WhatsApp
              </a>
              <a
                href="https://wa.me/254104250912"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-emerald-700/30 bg-white px-4 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                Buy Items via WhatsApp
              </a>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
