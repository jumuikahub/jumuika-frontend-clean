// app/(site)/page.tsx

import React from "react";
import Link from "next/link";
import TestWhatsApp from "@/components/TestWhatsApp"; // <-- Import TestWhatsApp

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Hero Section */}
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold sm:text-5xl mb-4">
          Welcome to Jumuika Hub KE
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A WhatsApp-first SaaS toolkit to power commerce, education,
          and institutional operations across Kenya.
        </p>
        <Link
          href="/about"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Learn More
        </Link>
      </section>

      {/* Divider */}
      <div className="my-12 border-t border-gray-200 w-full max-w-3xl" />

      {/* TestWhatsApp Component */}
      <section className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Developer Tools
        </h2>
        <div className="p-6 border border-gray-200 rounded-xl shadow-sm bg-gray-50">
          <TestWhatsApp />
        </div>
      </section>
    </main>
  );
}
