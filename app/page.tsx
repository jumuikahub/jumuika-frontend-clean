"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || "";
const waUrl = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export default function Home() {
  // simple mount-based fade-in (no keyframes/deps)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="relative isolate min-h-[70vh] w-full">
      {/* Hero container */}
      <section
        className={[
          "mx-auto max-w-5xl px-4",
          // spacing tuned for breathing room on all sizes
          "pt-14 sm:pt-16 lg:pt-20",
          "pb-10 sm:pb-12 lg:pb-14",
        ].join(" ")}
      >
        {/* Headline */}
        <h1
          className={[
            "text-center font-bold tracking-tight text-emerald-900",
            "text-4xl sm:text-5xl lg:text-[56px] leading-tight",
            // fade-in
            "transition-all duration-700",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          Welcome to Jumuika Hub KE
        </h1>

        {/* Subheadline */}
        <p
          className={[
            "mx-auto mt-5 max-w-3xl text-center text-slate-700",
            "text-base sm:text-[17px] leading-relaxed",
            // fade-in slightly after header
            "transition-all duration-700 delay-100",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects
          vendors, institutions, and students seamlessly. Real-time commerce. No
          apps needed.
        </p>

        {/* CTA Row */}
        <div
          className={[
            "mt-8 sm:mt-9 lg:mt-10",
            "flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4",
            // fade-in after copy
            "transition-all duration-700 delay-200",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          {/* Book Services CTA */}
          <Link href={waUrl("Hi! I want to book services via Jumuika Hub KE.")} target="_blank" rel="noopener noreferrer">
            <Button
              // keep our unified CTA look
              variant="emerald"
              className="h-11 rounded-xl px-5 sm:px-6 shadow-sm hover:shadow-md hover:shadow-emerald-900/10"
            >
              <span className="mr-2">Book Services via WhatsApp</span>
              <ArrowRight className="size-[18px]" aria-hidden="true" />
            </Button>
          </Link>

          {/* Buy Items CTA */}
          <Link href={waUrl("Hi! I want to buy items via Jumuika Hub KE.")} target="_blank" rel="noopener noreferrer">
            <Button
              variant="emerald"
              className="h-11 rounded-xl px-5 sm:px-6 shadow-sm hover:shadow-md hover:shadow-emerald-900/10"
            >
              <span className="mr-2">Buy Items via WhatsApp</span>
              <ShoppingCart className="size-[18px]" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
