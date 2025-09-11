import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function HeroSection() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center gap-6 py-20 text-center">
      <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
        WhatsApp-First SaaS Toolkit for Kenya
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground">
        Jumuika Hub KE helps businesses, schools, and institutions manage bookings, payments, and communication — all on WhatsApp.
      </p>
      <div className="flex gap-4">
        <PrimaryButton asChild>
          <Link href="/how-it-works">Get Started</Link>
        </PrimaryButton>
        <Link
          href="/about"
          className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-muted"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
