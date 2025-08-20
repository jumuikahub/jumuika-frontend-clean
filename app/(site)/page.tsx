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
    <section className="hero">
      <h1 className="hero-title">Welcome to {BRAND}</h1>
      <p className="hero-sub">{TAGLINE}</p>

      <div className="hero-cta">
        <Link href={WHATSAPP_CTA_URL} className="btn-primary">
          Book Services via WhatsApp
        </Link>
        <Link href={WHATSAPP_BUY_URL} className="btn-outline">
          Buy Items via WhatsApp
        </Link>
      </div>
    </section>
  );
}
