// app/page.tsx
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Jumuika Hub KE</h1>
        <p className="text-muted-foreground mb-8">
          Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects vendors,
          institutions, and students seamlessly. Real-time commerce. No apps needed.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button
            as="a"
            href="https://wa.me/254104250912?text=Hi%2C%20I%20want%20to%20buy%20via%20Jumuika%20Hub%20KE."
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Items via WhatsApp
          </Button>

          <Button
            as="a"
            href="https://wa.me/254104250912?text=Hi%2C%20I%20want%20to%20book%20a%20service%20via%20Jumuika%20Hub%20KE."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700"
          >
            Book Services via WhatsApp
          </Button>

          <Button as="a" href="/internlink" className="bg-gray-900 hover:bg-black">
            Explore InternLink
          </Button>
        </div>
      </div>
    </div>
  );
}
