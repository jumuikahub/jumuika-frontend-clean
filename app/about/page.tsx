import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jumuika Hub KE",
  description:
    "Learn more about Jumuika Hub KE — a WhatsApp-first commerce engine powering businesses across Kenya.",
};

export default function AboutPage() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-3xl font-semibold mb-4">About Jumuika Hub KE</h1>
      <p className="text-gray-600">
        Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects
        buyers, sellers, institutions, and students seamlessly. We enable
        real-time commerce without the need for apps.
      </p>
    </main>
  );
}
