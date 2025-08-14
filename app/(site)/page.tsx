// app/(site)/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui";

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900 sm:text-5xl">
            Welcome to Jumuika Hub KE
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-800/90">
            Jumuika Hub KE is a WhatsApp-first smart business toolkit that
            connects vendors, institutions, and students seamlessly. Real-time
            commerce. No apps needed.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild>
              <Link
                href="https://wa.me/254104250912"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Services via WhatsApp
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link
                href="https://wa.me/254104250912"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Items via WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
