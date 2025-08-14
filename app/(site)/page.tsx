import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui";

export const metadata = {
  title: "Jumuika Hub KE",
  description:
    "WhatsApp-first toolkit that connects vendors, institutions, and students seamlessly. Real-time commerce. No apps needed.",
};

export default function HomePage() {
  return (
    <main className="relative min-h-[70vh] px-6 py-12 text-center">
      {/* Emerald gradient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-emerald-50 via-white to-emerald-100"
      />

      <h1 className="text-4xl sm:text-5xl font-bold text-emerald-900">
        Welcome to Jumuika Hub KE
      </h1>

      <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
        Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects
        vendors, institutions, and students seamlessly. Real-time commerce. No
        apps needed.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/manager" className="inline-block">
          <Button
            variant="emerald"
            className="h-11 px-6 rounded-xl shadow-sm hover:shadow-md hover:shadow-emerald-900/10"
          >
            <span className="mr-2">Book Services via WhatsApp</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>

        <Link href="/psc" className="inline-block">
          <Button
            variant="outline"
            className="h-11 px-6 rounded-xl border-emerald-200"
          >
            <span className="mr-2">Buy Items via WhatsApp</span>
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
