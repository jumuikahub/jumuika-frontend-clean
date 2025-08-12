// app/page.tsx
import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || "254104250912";
const waUrl = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export default function Home() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-emerald-900">
        Welcome to Jumuika Hub KE
      </h1>

      <p className="max-w-2xl text-slate-600">
        Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects
        vendors, institutions, and students seamlessly. Real-time commerce. No
        apps needed.
      </p>

      {/* Unified CTA group */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          href={waUrl("Hi! I want to book services via Jumuika Hub KE.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="px-5 py-3 rounded-xl"
            aria-label="Book Services via WhatsApp"
          >
            Book Services via WhatsApp
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>

        <Link
          href={waUrl("Hi! I want to buy items via Jumuika Hub KE.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="px-5 py-3 rounded-xl"
            aria-label="Buy Items via WhatsApp"
          >
            Buy Items via WhatsApp
            <ShoppingBag className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
