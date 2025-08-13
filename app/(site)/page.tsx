import { ButtonLink } from "@/components/ui/Button";
import { ShoppingCart, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-emerald-900 text-center">
          Welcome to Jumuika Hub KE
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-slate-700">
          Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects vendors,
          institutions, and students seamlessly. Real-time commerce. No apps needed.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="https://wa.me/2547XXXXXXX" variant="primary" size="lg">
            Book Services via WhatsApp
            <ArrowRight className="size-4" />
          </ButtonLink>

          <ButtonLink href="https://wa.me/2547XXXXXXX" variant="secondary" size="lg">
            Buy Items via WhatsApp
            <ShoppingCart className="size-4" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
