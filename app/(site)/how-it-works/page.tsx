export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-8">How It Works</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-3 text-green-600">1. Vendors Subscribe</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Vendors join Jumuika Hub KE with a simple subscription. No app needed, just WhatsApp.
          </p>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-3 text-green-600">2. Buyers Connect</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Buyers discover and connect with vendors instantly via WhatsApp messages.
          </p>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-3 text-green-600">3. Secure Transactions</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Payments, bookings, and confirmations are automated, secure, and fraud-proof.
          </p>
        </div>
      </div>
    </main>
  );
}
