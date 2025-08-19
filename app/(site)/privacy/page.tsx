// app/(site)/privacy/page.tsx
import { BRAND_NAME } from "@/lib/constants";

export const metadata = {
  title: `Privacy • ${BRAND_NAME}`,
  description:
    "How we collect, use, and safeguard your data on Jumuika Hub KE. No user data is ever sold or shared without consent.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-gradient-to-b from-brand/10 via-brand/5 to-transparent">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-soft">
          <h1 className="text-center font-heading text-3xl text-brand-dark">
            Privacy Policy
          </h1>

          <div className="prose prose-zinc mx-auto mt-6">
            <p>
              We value your privacy. This page outlines how we collect, use, and
              safeguard your data on {BRAND_NAME}. No user data is sold or
              shared without consent.
            </p>

            <h3>Information we collect</h3>
            <p>
              Minimal operational data required to provide WhatsApp-based
              services (e.g., your WhatsApp number and essential contact info).
            </p>

            <h3>How we use your data</h3>
            <p>
              To enable messaging, reminders, and service coordination between
              vendors and customers.
            </p>

            <h3>Data retention</h3>
            <p>
              We keep data only as long as needed for service delivery or
              compliance, then delete it securely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
