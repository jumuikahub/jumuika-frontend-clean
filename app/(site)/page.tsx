// app/(site)/page.tsx
import Link from "next/link";
import constants from "@/lib/constants";

export const metadata = {
  title: `Home • ${constants.BRAND_NAME}`,
  description: constants.TAGLINE,
};

export default function HomePage() {
  const { BRAND_NAME, TAGLINE, WHATSAPP_CTA_URL, WHATSAPP_BUY_URL } = constants;

  return (
    <section className="border-b bg-gradient-to-b from-emerald-50 to-emerald-100/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-6xl">
          Welcome to {BRAND_NAME}
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-zinc-700">
          {TAGLINE}
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href={WHATSAPP_CTA_URL}
            target="_blank"
            className="btn-primary"
          >
            Book Services via WhatsApp
          </Link>

          <Link
            href={WHATSAPP_BUY_URL}
            target="_blank"
            className="btn-outline"
          >
            Buy Items via WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
