"use client";

import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <h1 className="text-4xl font-bold text-green-800 md:text-5xl mb-4">
        Welcome to Jumuika Hub KE
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-8">
        Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects vendors, institutions,
        and students seamlessly. Real-time commerce. No apps needed.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link href="https://wa.me/254104250912?text=Hello%2C%20I%20would%20like%20to%20book%20services">
          <Button
            className="w-full sm:w-60 bg-green-800 hover:bg-green-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Book Services via WhatsApp
            <ArrowRight size={18} />
          </Button>
        </Link>

        <Link href="https://wa.me/254104250912?text=Hello%2C%20I%20would%20like%20to%20buy%20items">
          <Button
            className="w-full sm:w-60 bg-green-800 hover:bg-green-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Buy Items via WhatsApp
            <ShoppingCart size={18} />
          </Button>
        </Link>
      </div>
    </main>
  );
}
