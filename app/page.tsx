// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jumuika Hub KE – WhatsApp-First Smart Business Toolkit",
  description:
    "Connect vendors, institutions, and students seamlessly. Real-time commerce. No apps needed.",
};

const WA_NUMBER = "254104250912";
const WA_URL = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export default function Home() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-5xl font-bold tracking-tight">
        Welcome to Jumuika Hub KE
      </h1>

      <p className="max-w-3xl text-muted-foreground">
        Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects
        vendors, institutions, and students seamlessly. Real-time commerce. No
        apps needed.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {/* Buy Items CTA */}
        <Link
          href={WA_URL("Hi! I want to buy items via Jumuika Hub KE.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all">
            Buy Items via WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>

        {/* Book Services CTA */}
        <Link
          href={WA_URL("Hi! I want to book services via Jumuika Hub KE.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="px-6 py-3 rounded-2xl">
            Book Services via WhatsApp
          </Button>
        </Link>
      </div>
    </main>
  );
}
