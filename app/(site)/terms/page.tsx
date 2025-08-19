// app/(site)/terms/page.tsx
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: `Terms & Conditions • ${BRAND.name}`,
  description: "The rules and terms that govern using our services.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="my-8 rounded-2xl border bg-emerald-50 p-8 text-center md:my-10 md:p-12">
        <h1 className="text-3xl font-bold text-emerald-900 md:text-4xl">
          Terms & Conditions
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-emerald-900/90">
          By using {BRAND.name}, you agree to our standard terms of use and
          acceptable use policy. If you have any questions, contact us on
          WhatsApp.
        </p>
      </div>
    </section>
  );
}
