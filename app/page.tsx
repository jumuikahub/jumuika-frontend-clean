// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-4xl font-bold">Welcome to Jumuika Hub KE</h1>
      <p className="text-lg max-w-xl mx-auto">
        Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects vendors, institutions, and students seamlessly. Real-time commerce. No apps needed.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Link
          href="https://wa.me/254104250912?text=I%20want%20to%20buy%20items"
          className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition text-sm font-semibold"
        >
          Buy Items via WhatsApp
        </Link>
        <Link
          href="https://wa.me/254104250912?text=I%20want%20to%20book%20a%20service"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition text-sm font-semibold"
        >
          Book Services via WhatsApp
        </Link>
      </div>
    </div>
  )
}
