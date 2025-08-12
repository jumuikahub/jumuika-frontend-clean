export default function Home() {
  return (
    <main className="bg-gradient-to-b from-green-100 via-green-50 to-white min-h-screen flex flex-col">
      <section className="flex flex-col items-center justify-center py-20 text-center flex-grow">
        <h1 className="text-4xl font-bold text-green-900 mb-6">
          Welcome to Jumuika Hub KE
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-8">
          Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects vendors,
          institutions, and students seamlessly. Real-time commerce. No apps needed.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://wa.me/254700915610?text=I%20want%20to%20book%20a%20service"
            className="px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 transition"
          >
            Book Services via WhatsApp →
          </a>
          <a
            href="https://wa.me/254700915610?text=I%20want%20to%20buy%20an%20item"
            className="px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 transition"
          >
            Buy Items via WhatsApp 🛒
          </a>
        </div>
      </section>
    </main>
  );
}
