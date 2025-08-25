import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jumuika Hub KE",
  description: "Learn more about Jumuika Hub KE – the WhatsApp-first SaaS toolkit.",
};

export default function AboutPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Jumuika Hub KE is a WhatsApp-first SaaS toolkit that enables businesses and institutions
        to run operations seamlessly. From bookings to payments, we make everything accessible
        on WhatsApp without requiring an app.
      </p>
      <p>
        Our mission is to empower vendors, schools, and organizations with simple, secure,
        and mobile-first tools to grow sustainably.
      </p>
    </main>
  );
}
