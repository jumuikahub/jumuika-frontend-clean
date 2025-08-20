// app/(site)/privacy/page.tsx
import constants from "@/lib/constants";
const { BRAND } = constants;

export const metadata = {
  title: `Privacy • ${BRAND}`,
  description: `Privacy Policy for ${BRAND}`,
};

export default function PrivacyPage() {
  return (
    <section className="prose prose-zinc mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1>Privacy Policy</h1>
      <p>
        We respect your privacy. {BRAND} only collects the minimum information
        required to operate the service and communicate with you via WhatsApp.
      </p>
      <h2>What we collect</h2>
      <ul>
        <li>Basic contact details you share with us (e.g., WhatsApp number).</li>
        <li>Operational data you submit (e.g., listings, orders).</li>
      </ul>
      <h2>How we use it</h2>
      <ul>
        <li>To provide and improve the service.</li>
        <li>To communicate important updates or support via WhatsApp.</li>
      </ul>
      <p>
        For questions, contact us on WhatsApp and we’ll help promptly.
      </p>
    </section>
  );
}
