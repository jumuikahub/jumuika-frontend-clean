import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jumuika Hub KE | WhatsApp-First SaaS Toolkit",
  description: "Run your business directly on WhatsApp – bookings, payments, referrals, and more.",
};

export default function HomePage() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Jumuika Hub KE</h1>
      <p className="mb-6 text-lg">
        The WhatsApp-first SaaS toolkit for businesses, institutions, and vendors in Kenya.
      </p>
      <Link href="/how-it-works" className="text-blue-600 hover:underline">
        Learn how it works
      </Link>
    </main>
  );
}
