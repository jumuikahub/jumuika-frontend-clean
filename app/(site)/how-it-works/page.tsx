import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Jumuika Hub KE",
  description: "Understand how Jumuika Hub KE helps businesses and institutions run on WhatsApp.",
};

export default function HowItWorksPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">How It Works</h1>
      <ol className="list-decimal list-inside space-y-3">
        <li>Sign up your business or institution on Jumuika Hub KE.</li>
        <li>Get a dedicated WhatsApp-powered interface for your customers.</li>
        <li>Accept payments via M-Pesa Buy Goods Till directly on WhatsApp.</li>
        <li>Use referral rewards and booking automation to grow faster.</li>
      </ol>
    </main>
  );
}
