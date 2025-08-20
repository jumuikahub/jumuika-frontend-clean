// app/(site)/page.tsx
import Link from "next/link";
import { BRAND_NAME, BRAND_TAGLINE, WHATSAPP_CTA_URL } from "@/lib/constants";

export const metadata = {
  title: `${BRAND_NAME} • Home`,
  description: BRAND_TAGLINE,
};

const btn =
  "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium shadow-soft transition-all focus:outline-none focus:ring-2 focus:ring-brand/30";

export default function HomePage() {
  return (
    <section className="bg-gradient-to-b from-brand/10 via-brand/5 to-transparent">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tight text-brand-dark">
          Welcome to {BRAND_NAME}
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-zinc-700">
          {BRAND_TAGLINE}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={WHATSAPP_CTA_URL}
            target="_blank"
            className={`${btn} bg-brand text-white hover:bg-brand-dark`}
          >
            Book Services via WhatsApp
          </Link>

          <Link
            href={WHATSAPP_CTA_URL}
            target="_blank"
            className={`${btn} border border-brand/40 bg-white text-brand hover:bg-brand/10`}
          >
            Buy Items via WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
