// app/(site)/page.tsx
import Link from "next/link";
import constants from "@/lib/constants";

const { BRAND_NAME, BRAND_TAGLINE, WHATSAPP_CTA_URL, WHATSAPP_BUY_URL } = constants;

export const metadata = {
  title: `${BRAND_NAME} • Home`,
  description: BRAND_TAGLINE,
};

export default function HomePage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="mt-10 rounded-3xl border border-emerald-100 bg-emerald-50 p-10 text-center shadow-sm">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Welcome to {BRAND_NAME}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-700">{BRAND_TAGLINE}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href={WHATSAPP_CTA_URL} target="_blank" className="btn-primary">
              Book Services via WhatsApp
            </Link>
            <Link href={WHATSAPP_BUY_URL} target="_blank" className="btn-outline">
              Buy Items via WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
