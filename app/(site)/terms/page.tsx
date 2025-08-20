// app/(site)/terms/page.tsx
import constants from "@/lib/constants";
const { BRAND } = constants;

export const metadata = {
  title: `Terms & Conditions • ${BRAND}`,
  description: `Terms & Conditions for ${BRAND}`,
};

export default function TermsPage() {
  return (
    <section className="prose prose-zinc mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1>Terms &amp; Conditions</h1>
      <p>
        By using {BRAND}, you agree to operate lawfully and respect other users.
        We may update these terms as the product evolves.
      </p>
      <h2>Acceptable use</h2>
      <ul>
        <li>No fraud, spam, or prohibited items/services.</li>
        <li>Respect privacy and applicable regulations.</li>
      </ul>
      <h2>Liability</h2>
      <p>
        The service is provided “as is”. We aim for reliability but do not
        guarantee uninterrupted availability.
      </p>
    </section>
  );
}
