// app/(site)/about/page.tsx
import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <section className="py-6 sm:py-8">
      <div className="bg-emerald-50 ring-1 ring-emerald-100/60">
        <Container className="py-10 sm:py-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-emerald-900 sm:text-4xl">
            About Jumuika Hub KE
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
            Jumuika Hub KE is a WhatsApp-first smart business toolkit. We help vendors,
            institutions, and students connect and transact in real time, without extra apps.
            Our mission is to make commerce seamless and accessible through familiar channels.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
            We focus on practical tools: onboarding, listings, bookings, payments, and simple
            workflows that run on WhatsApp. Jumuika is designed for speed, clarity, and trust.
          </p>
        </Container>
      </div>
    </section>
  );
}
