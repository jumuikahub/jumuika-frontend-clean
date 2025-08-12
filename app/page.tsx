// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP ?? "254104250912";
const wa = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export default function Home() {
  return (
    <main
      className={`
        relative overflow-hidden
        flex min-h-[70vh] flex-col items-center justify-center
        gap-6 px-4 text-center
      `}
    >
      {/* Diagonal emerald overlay */}
      <div
        aria-hidden
        className={`
          pointer-events-none absolute inset-0 -z-10
          bg-gradient-to-tr from-emerald-100 via-emerald-50 to-white
        `}
      />

      {/* Stronger radial blobs for depth */}
      <div
        aria-hidden
        className={`
          pointer-events-none absolute -left-28 -top-28 -z-10 h-72 w-72
          rounded-full bg-emerald-300/40 blur-3xl
        `}
      />
      <div
        aria-hidden
        className={`
          pointer-events-none absolute -bottom-24 -right-28 -z-10 h-80 w-80
          rounded-full bg-emerald-400/30 blur-3xl
        `}
      />

      {/* Subtle horizontal glow line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-emerald-900/10 to-transparent"
      />

      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-emerald-900">
        Welcome to Jumuika Hub KE
      </h1>

      <p className="max-w-3xl text-muted-foreground">
        Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects
        vendors, institutions, and students seamlessly. Real-time commerce. No
        apps needed.
      </p>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        {/* Book Services CTA */}
        <Link
          href={wa("Hi! I want to book services via Jumuika Hub KE.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="emerald"
            className="h-11 rounded-xl px-5 sm:px-6 shadow-sm hover:shadow-md hover:shadow-emerald-900/10"
          >
            <span className="mr-2">Book Services via WhatsApp</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>

        {/* Buy Items CTA */}
        <Link
          href={wa("Hi! I want to buy items via Jumuika Hub KE.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="emerald"
            className="h-11 rounded-xl px-5 sm:px-6 shadow-sm hover:shadow-md hover:shadow-emerald-900/10"
          >
            <span className="mr-2">Buy Items via WhatsApp</span>
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
