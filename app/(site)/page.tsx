import PrimaryCTAs from "@/components/ui/PrimaryCTAs";
import { BRAND, TAGLINE } from "@/lib/constants";

export const metadata = {
  title: `Home • ${BRAND}`,
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4">
      <section className="my-12 rounded-2xl bg-emerald-50/60 p-8 md:my-16 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl">
            Welcome to {BRAND}
          </h1>
          <p className="mt-4 text-base text-neutral-700 md:text-lg">{TAGLINE}</p>

          <PrimaryCTAs className="mt-8 justify-center" />
        </div>
      </section>
    </main>
  );
}
