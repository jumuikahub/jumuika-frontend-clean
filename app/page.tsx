// app/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jumuika Hub KE – WhatsApp-First Smart Business Toolkit",
  description: "Connect vendors, students, and institutions via WhatsApp in real-time. No apps needed.",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-6">
      <h1 className="text-3xl md:text-5xl font-bold">Welcome to Jumuika Hub KE</h1>
      <p className="max-w-xl text-gray-600 dark:text-gray-300">
        Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects vendors,
        institutions, and students seamlessly. Real-time commerce. No apps needed.
      </p>
      <div className="flex justify-center">
        <Link
          href="https://wa.me/254104250912?text=I%20want%20to%20book%20services%20via%20Jumuika"
          passHref
        >
          <Button className="text-base px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all">
            Book Services via WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
