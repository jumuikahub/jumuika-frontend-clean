// Temporarily disabled for deploy
import Link from "next/link"

export default function InstitutionsPage() {
  return (
    <section className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">For Colleges & Schools</h1>
      <p className="text-gray-700 mb-8">
        Onboard students, manage fee payments, and send automated updates directly through WhatsApp.
      </p>
      <Button variant="primary" asChild>
        <Link href="https://wa.me/254104250912">Onboard Your Institution</Link>
      </Button>
    </section>
  )
}
