// app/(site)/terms/page.tsx
import { BRAND_NAME } from "@/lib/constants";

export const metadata = {
  title: `Terms & Conditions • ${BRAND_NAME}`,
  description:
    "Terms that govern use of Jumuika Hub KE and any related WhatsApp interactions.",
};

export default function TermsPage() {
  return (
    <section className="bg-gradient-to-b from-brand/10 via-brand/5 to-transparent">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-soft">
          <h1 className="text-center font-heading text-3xl text-brand-dark">
            Terms & Conditions
          </h1>

          <div className="prose prose-zinc mx-auto mt-6">
            <p>
              By using {BRAND_NAME}, you agree to these terms. We provide a
              WhatsApp-first toolkit that connects vendors and students.
            </p>

            <h3>Acceptable use</h3>
            <p>
              Use the platform lawfully and respectfully. Do not abuse,
              spam, or misrepresent services or identity.
            </p>

            <h3>Payments & bookings</h3>
            <p>
              Transactions and bookings coordinated via WhatsApp are between
              vendors and customers. {BRAND_NAME} is not a party to those
              agreements.
            </p>

            <h3>Changes</h3>
            <p>
              We may update these terms to improve service or meet compliance
              needs. Continued use indicates acceptance of the latest version.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
