// app/(site)/terms/page.tsx
import metadata from "./metadata";

export { metadata };

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <section className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900 sm:text-5xl">
          Terms & Conditions
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-900/80">
          These terms govern your use of Jumuika Hub KE. By accessing or using
          the service, you agree to the following.
        </p>
      </section>

      <article className="prose prose-zinc mx-auto mt-10 max-w-4xl">
        <h2>Acceptable use</h2>
        <p>
          Use the platform responsibly and in compliance with local laws and
          WhatsApp policies.
        </p>

        <h2>Content & listings</h2>
        <p>
          You are responsible for the accuracy of your product or service
          listings and for honoring your commitments to customers.
        </p>

        <h2>Liability</h2>
        <p>
          Jumuika Hub KE is provided “as is”. We are not liable for indirect or
          consequential damages arising from the use of the platform.
        </p>
      </article>
    </main>
  );
}
