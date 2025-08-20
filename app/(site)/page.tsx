// app/(site)/page.tsx
import Link from "next/link";
import constants from "@/lib/constants";
const { BRAND, TAGLINE, WHATSAPP_CTA_URL, WHATSAPP_BUY_URL } = constants;

export const metadata = {
  title: `Home • ${BRAND}`,
  description: TAGLINE,
};

export default function HomePage() {
  return (
    <section className="mt-10 rounded-2xl bg-brand-50 px-4 py-14 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Welcome to {BRAND}
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-lg text-zinc-600">{TAGLINE}</p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href={WHATSAPP_CTA_URL} className="btn-primary" target="_blank">
          Book Services via WhatsApp
        </Link>
        <Link href={WHATSAPP_BUY_URL} className="btn-outline" target="_blank">
          Buy Items via WhatsApp
        </Link>
      </div>
    </section>
  );
}
