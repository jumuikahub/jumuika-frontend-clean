// app/page.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP ?? "254104250912";
const waUrl = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export default function Home() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
      {/* darker emerald gradient heading */}
      <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-b from-emerald-700 via-emerald-800 to-emerald-900 bg-clip-text text-transparent">
        Welcome to Jumuika Hub KE
      </h1>

      <p className="max-w-3xl text-muted-foreground">
        Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects
        vendors, institutions, and students seamlessly. Real-time commerce. No
        apps needed.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href={waUrl("Hi! I want to book services via Jumuika Hub KE.")}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 border"
        >
          Book Services via WhatsApp
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </main>
  );
}
