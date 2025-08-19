// app/page.tsx
import Link from "next/link";
import { BRAND, WHATSAPP_CTA_URL } from "@/lib/constants";

export const metadata = {
  title: `${BRAND.name} • Home`,
  description: BRAND.tagline,
};

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="my-8 rounded-2xl border bg-gradient-to-b from-emerald-50 to-emerald-100 p-8 text-center md:my-10 md:p-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-emerald-900 md:text-5xl">
          Welcome to {BRAND.name}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-emerald-900/90 md:text-lg">
          {BRAND.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={WHATSAPP_CTA_URL}
            target="_blank"
            className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Book Services via WhatsApp
          </Link>
          <Link
            href={WHATSAPP_CTA_URL}
            target="_blank"
            className="rounded-full border border-emerald-600 px-5 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50"
          >
            Buy Items via WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
