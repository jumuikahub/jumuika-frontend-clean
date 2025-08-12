// app/page.tsx
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP ?? "254104250912";
const WA_URL = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export default function Home() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-5xl font-bold tracking-tight text-emerald-900 sm:text-6xl">
        Welcome to Jumuika Hub KE
      </h1>

      <p className="max-w-2xl text-muted-foreground">
        Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects
        vendors, institutions, and students seamlessly. Real-time commerce. No
        apps needed.
      </p>

      {/* CTAs */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        {/* Book Services */}
        <Link
          href={WA_URL("Hi! I want to book services via Jumuika Hub KE.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="px-6 py-3 shadow-md hover:shadow-lg transition-all">
            Book Services via WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>

        {/* Buy Items */}
        <Link
          href={WA_URL("Hi! I want to buy items via Jumuika Hub KE.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="px-6 py-3 shadow-md hover:shadow-lg transition-all"
          >
            Buy Items via WhatsApp
            <ShoppingBag className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
