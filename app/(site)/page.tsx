import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold mb-4">
        Jumuika Hub KE – WhatsApp-First SaaS Business Toolkit
      </h1>
      <p className="mb-6 max-w-2xl">
        Manage your business directly on WhatsApp. Automate bookings,
        payments, float rewards, and referrals—all without needing an app.
      </p>
      <div className="flex space-x-4">
        <Link
          href="/about"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          About
        </Link>
        <Link
          href="/how-it-works"
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
        >
          How It Works
        </Link>
        <Link
          href="/blog"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700"
        >
          Blog
        </Link>
      </div>
    </main>
  );
}
