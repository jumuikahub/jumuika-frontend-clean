// app/(site)/privacy/page.tsx
import Container from "@/components/Container";

export default function PrivacyPage() {
  return (
    <section className="py-6 sm:py-8">
      <Container>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
          We value your privacy. This page outlines how we collect, use, and safeguard your data on
          Jumuika Hub KE. No user data is ever sold or shared without consent.
        </p>
      </Container>
    </section>
  );
}
