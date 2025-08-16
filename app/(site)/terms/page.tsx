// app/(site)/terms/page.tsx
import Container from "@/components/Container";

export default function TermsPage() {
  return (
    <section className="py-6 sm:py-8">
      <Container>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
          By using Jumuika Hub KE, you agree to comply with our platform’s rules and
          responsibilities. Users are responsible for their listings, payments, and
          communication. Jumuika only facilitates connections.
        </p>
      </Container>
    </section>
  );
}
