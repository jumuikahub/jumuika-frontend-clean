// app/(site)/terms/page.tsx
import constants from "@/lib/constants";

const { BRAND_NAME, TAGLINE } = constants;

export const metadata = {
  title: `Terms & Conditions • ${BRAND_NAME}`,
  description: TAGLINE,
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl py-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Terms & Conditions</h1>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-700">
          Please read these terms carefully. By using {BRAND_NAME}, you agree
          to the conditions below.
        </p>
      </header>

      <div className="prose mt-10 max-w-none text-sm leading-7 text-neutral-800">
        <h2>Use of service</h2>
        <p>
          You’ll use the platform in compliance with applicable laws and solely
          for lawful commerce via WhatsApp.
        </p>

        <h2>Vendor responsibilities</h2>
        <p>
          Vendors are responsible for accuracy of listings, pricing, and timely
          customer communication on WhatsApp.
        </p>

        <h2>Liability</h2>
        <p>
          {BRAND_NAME} is a facilitation toolkit. We aren’t a party to
          transactions between vendors and customers.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms from time to time. Continued use indicates
          acceptance of the latest version.
        </p>
      </div>
    </section>
  );
}
