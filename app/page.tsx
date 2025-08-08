"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Jumuika Hub KE</h1>
      <p className="mb-6 max-w-xl">
        Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects vendors, institutions, and students seamlessly. Real-time commerce. No apps needed.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="https://wa.me/254700915610?text=I%20want%20to%20Buy%20Items%20via%20Jumuika">
          <Button className="text-lg px-6 py-3">
            Buy Items via WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <Link href="https://wa.me/254700915610?text=I%20want%20to%20Book%20a%20Service%20on%20Jumuika">
          <Button variant="outline" className="text-lg px-6 py-3">
            Book Services via WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
