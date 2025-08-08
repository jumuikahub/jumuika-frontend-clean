import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Jumuika Hub KE",
  description:
    "Review the official terms of service for using Jumuika Hub KE. Read about our responsibilities, user agreements, and platform rules.",
};

export default function TermsPage() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-3xl font-semibold mb-4">Terms & Conditions</h1>
      <p className="text-gray-600">
        By using Jumuika Hub KE, you agree to abide by our platform rules,
        subscription model, and referral terms. Jumuika is not liable for
        vendor-client interactions.
      </p>
    </main>
  );
}
