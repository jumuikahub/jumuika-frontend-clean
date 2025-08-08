import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <section className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-6">
          Welcome to Jumuika Hub KE
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects vendors, institutions, and students seamlessly.
          Real-time commerce. No apps needed.
        </p>

        <div className="flex justify-center">
          <Button
            asChild
            className="text-base px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <a
              href="https://wa.me/254104250912?text=Hello%2C%20I%20would%20like%20to%20book%20services%20via%20Jumuika%20Hub%20KE."
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Services via WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}
