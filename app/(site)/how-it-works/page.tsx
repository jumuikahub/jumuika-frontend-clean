import SEO from "@/components/site/SEO"; // ✅ Fixed path

export default function HowItWorksPage() {
  return (
    <>
      <SEO
        title="How Jumuika Hub KE Works"
        description="Discover how Jumuika Hub KE enables vendors, buyers, and institutions to connect and transact directly via WhatsApp."
      />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">How It Works</h1>
        <p>
          Jumuika Hub KE integrates WhatsApp with payments, bookings,
          and float rewards. Vendors list, customers book, and everyone
          transacts securely via M-Pesa and WhatsApp automation.
        </p>
      </main>
    </>
  );
}
