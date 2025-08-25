import { Button } from "@/components/ui/button";
import { SEO } from "@/components/site/SEO";

export const metadata = SEO({
  title: "Jumuika Hub KE – WhatsApp-First SaaS Toolkit",
  description:
    "Simplify bookings, payments, and automation with Jumuika Hub KE. Your all-in-one WhatsApp-First business toolkit, now with branded CTA actions.",
  url: "https://jumuika.vercel.app/",
});

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">
        Jumuika Hub KE
      </h1>
      <p className="text-lg mb-8 max-w-xl">
        The WhatsApp-First SaaS toolkit for Kenyan businesses, schools, and entrepreneurs.
        Automate payments, bookings, and referrals instantly.
      </p>
      <Button variant="primary" size="lg">
        Get Started on WhatsApp
      </Button>
    </main>
  );
}
