// app/(site)/page.tsx
import Link from "next/link";

function waLink(kind: "services" | "items") {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP ?? "";
  const build = process.env.NEXT_PUBLIC_BUILD_ID ?? "";
  const base = `https://wa.me/${phone}`;
  const text =
    kind === "services"
      ? "Hi Jumuika Hub KE, I want to book services."
      : "Hi Jumuika Hub KE, I want to buy items.";
  const msg = encodeURIComponent(`${text} (build: ${build})`);
  return `${base}?text=${msg}`;
}

export default function HomePage() {
  const servicesUrl = waLink("services");
  const itemsUrl = waLink("items");

  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 pt-16 pb-10 sm:pt-20 sm:pb-16">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold leading-tight text-emerald-900 sm:text-5xl">
          Welcome to Jumuika Hub KE
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          Jumuika Hub KE is a WhatsApp-first smart business toolkit that
          connects vendors, institutions, and students seamlessly. Real-time
          commerce. No apps needed.
        </p>
      </header>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row">
        {/* CTA 1: Services */}
        <Link
          href={servicesUrl}
          className="group inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 sm:px-6"
        >
          <span>Book Services via WhatsApp</span>
          <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>

        {/* CTA 2: Items */}
        <Link
          href={itemsUrl}
          className="group inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 sm:px-6"
        >
          <span>Buy Items via WhatsApp</span>
          {/* tiny cart icon (inline SVG) */}
          <svg
            className="ml-2 h-4 w-4 opacity-90 transition-transform group-hover:scale-[1.05]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
