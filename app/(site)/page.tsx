import SEO from "@/components/site/SEO"; // ✅ Fixed path

export default function HomePage() {
  return (
    <>
      <SEO
        title="Jumuika Hub KE – WhatsApp-First SaaS Business Toolkit"
        description="Connect vendors and buyers on WhatsApp for bookings, payments, rewards, and referrals. A smart marketplace designed for Kenya."
      />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to Jumuika Hub KE</h1>
        <p>
          The WhatsApp-first smart marketplace for bookings, payments,
          float rewards, referrals, and listings — all without an app.
        </p>
      </main>
    </>
  );
}
