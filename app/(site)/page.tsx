import SEO from "@/components/SEO";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Jumuika Hub KE | WhatsApp-First SaaS Toolkit"
        description="Run your business, bookings, and payments directly from WhatsApp. Jumuika Hub KE connects vendors, buyers, and institutions seamlessly."
        keywords="WhatsApp business Kenya, Jumuika Hub KE, SaaS toolkit, M-Pesa integration, vendor marketplace"
      />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Welcome to Jumuika Hub KE</h1>
        <p className="mt-4 text-lg">
          Your WhatsApp-first SaaS toolkit for bookings, payments, float
          rewards, and vendor-buyer connections.
        </p>
      </main>
    </>
  );
}
