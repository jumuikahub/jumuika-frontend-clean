// app/(site)/page.tsx
import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE, WHATSAPP_CTA_URL } from "@/lib/constants";

export const metadata = {
  title: `${SITE_NAME}`,
  description: SITE_TAGLINE,
};

export default function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="mt-10 rounded-2xl border bg-emerald-50/60 px-6 py-10 text-center sm:px-10">
        <h1 className="text-4xl font-semibold tracking-tight text-emerald-900 sm:text-5xl">
          Welcome to {SITE_NAME}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-emerald-900/80">
          {SITE_TAGLINE}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={WHATSAPP_CTA_URL}
            className="rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Book Services via WhatsApp
          </Link>
          <Link
            href={WHATSAPP_CTA_URL}
            className="rounded-full border border-emerald-700 px-5 py-2.5 text-sm font-medium text-emerald-800 hover:bg-emerald-50"
          >
            Buy Items via WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
