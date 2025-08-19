// app/(site)/privacy/page.tsx
import metadata from "./metadata";

export { metadata };

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <section className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900 sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-900/80">
          We value your privacy. This page outlines how we collect, use, and
          safeguard your data on Jumuika Hub KE. No user data is ever sold or
          shared without consent.
        </p>
      </section>

      <article className="prose prose-zinc mx-auto mt-10 max-w-4xl">
        <h2>What we collect</h2>
        <p>
          Minimal contact information and conversation metadata strictly for
          service delivery on WhatsApp.
        </p>

        <h2>How we use your data</h2>
        <p>
          To provide real-time messaging, booking, and commerce experiences to
          vendors and students, and to improve the platform.
        </p>

        <h2>Your choices</h2>
        <p>
          You may request access to or deletion of your data at any time. Reach
          out via WhatsApp using the contact button on our site.
        </p>
      </article>
    </main>
  );
}
