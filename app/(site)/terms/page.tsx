export default function Terms() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 px-6 py-16">
      <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">Terms & Conditions</h1>
      <div className="max-w-4xl mx-auto space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          Jumuika Hub KE provides a SaaS toolkit that enables vendors and buyers to connect on
          WhatsApp. By using our services, you agree to comply with these Terms.
        </p>
        <ul className="list-disc pl-6">
          <li>Vendors are responsible for their own listings, pricing, and customer interactions.</li>
          <li>Jumuika Hub KE does not issue receipts or handle vendor taxes.</li>
          <li>Subscription fees are non-refundable once paid.</li>
          <li>Bookings and reservations must follow vendor timelines and cancellation rules.</li>
        </ul>
        <p>
          Jumuika Hub KE reserves the right to update these Terms. Continued use of our platform
          means acceptance of all updates.
        </p>
      </div>
    </main>
  );
}
