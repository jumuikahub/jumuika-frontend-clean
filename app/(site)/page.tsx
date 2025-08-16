import Link from "next/link";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jumuika Hub KE – WhatsApp-first smart business toolkit",
  description:
    "Connect vendors, institutions and students seamlessly. Real-time commerce. No apps needed.",
};

export default function HomePage() {
  return (
    <section className="py-10 sm:py-14">
      {/* Make the outer container centered */}
      <div className="mx-auto w-full max-w-screen-xl px-4">
        {/* The hero card also uses the same container rhythm */}
        <div className="rounded-2xl bg-emerald-50 p-6 sm:p-10">
          <div className="mx-auto w-full max-w-4xl">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-emerald-900 sm:text-5xl">
              Welcome to Jumuika Hub KE
            </h1>

            <p className="mt-4 max-w-3xl text-slate-700 sm:text-lg">
              Jumuika Hub KE is a WhatsApp-first smart business toolkit that
              connects vendors, institutions, and students seamlessly. Real-time
              commerce. No apps needed.
            </p>

            {/* CTAs – consistent variants/sizes across the site */}
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              {/* Primary CTA */}
              <Button
                as="a"
                href="https://wa.me/254104250912" // Jumuika API number
                variant="primary"
                className="w-full sm:w-auto"
              >
                Book Services via WhatsApp
              </Button>

              {/* Secondary CTA */}
              <Button
                as="a"
                href="https://wa.me/254104250912?text=Hi%20Jumuika%2C%20I%20want%20to%20buy%20items"
                variant="outline"
                className="w-full sm:w-auto"
              >
                Buy Items via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
