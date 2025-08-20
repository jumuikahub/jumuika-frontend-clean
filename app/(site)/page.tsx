// app/(site)/page.tsx
import Link from "next/link";
import constants from "@/lib/constants";

const { BRAND_NAME, TAGLINE, WHATSAPP_CTA_URL, WHATSAPP_BUY_URL } = constants;

export const metadata = {
  title: `${BRAND_NAME} • Home`,
  description: TAGLINE,
};

export default function HomePage() {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-transparent">
      <div className="mx-auto max-w-5xl px-4 py-14 text-center md:py-20">
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
          Welcome to {BRAND_NAME}
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-neutral-700 md:text-lg">
          {TAGLINE}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={WHATSAPP_CTA_URL}
            target="_blank"
            className="rounded-lg bg-primary px-6 py-3 text-white shadow hover:bg-primary/90"
          >
            Book Services via WhatsApp
          </Link>

          <Link
            href={WHATSAPP_BUY_URL}
            target="_blank"
            className="rounded-lg border border-neutral-300 px-6 py-3 text-neutral-800 shadow-sm hover:bg-neutral-50"
          >
            Buy Items via WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
