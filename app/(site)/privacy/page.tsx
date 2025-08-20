// app/(site)/privacy/page.tsx
import constants from "@/lib/constants";

const { BRAND_NAME, TAGLINE } = constants;

export const metadata = {
  title: `Privacy • ${BRAND_NAME}`,
  description: TAGLINE,
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl py-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Privacy Policy</h1>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-700">
          We value your privacy. This page outlines how we collect, use, and
          safeguard your data on {BRAND_NAME}. No user data is ever sold or
          shared without consent.
        </p>
      </header>

      <div className="prose mt-10 max-w-none text-sm leading-7 text-neutral-800">
        <h2>What we collect</h2>
        <p>
          Minimal contact details you provide (e.g., WhatsApp number) and basic
          usage analytics that help improve the service.
        </p>

        <h2>How we use it</h2>
        <p>
          To enable real-time WhatsApp interactions, improve reliability, and
          provide support. We do not sell personal data.
        </p>

        <h2>Data retention</h2>
        <p>
          We retain only what’s necessary for operations and legal compliance.
          You can request deletion of your data at any time.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about privacy? Reach us on WhatsApp via the contacts on our
          site.
        </p>
      </div>
    </section>
  );
}
