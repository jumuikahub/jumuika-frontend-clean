// app/page.tsx
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

// ── WhatsApp link helper ──────────────────────────────────────────────────────
const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || "254104250912";
const waUrl = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export default function Home() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-emerald-900">
        Welcome to Jumuika Hub KE
      </h1>

      <p className="max-w-2xl text-muted-foreground">
        Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects
        vendors, institutions, and students seamlessly. Real-time commerce. No
        apps needed.
      </p>

      {/* Unified CTA group (both primary) */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          href={waUrl("Hi! I want to book services via Jumuika Hub KE.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open WhatsApp to book services"
        >
          <Button className="px-5 py-3 rounded-xl">
            Book Services via WhatsApp
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>

        <Link
          href={waUrl("Hi! I want to buy items via Jumuika Hub KE.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open WhatsApp to buy items"
        >
          <Button className="px-5 py-3 rounded-xl">
            Buy Items via WhatsApp
            <ShoppingBag className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
