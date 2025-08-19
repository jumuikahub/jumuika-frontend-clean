// app/(site)/privacy/page.tsx
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: `Privacy • ${BRAND.name}`,
  description: "How we collect, use, and safeguard your data.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="my-8 rounded-2xl border bg-emerald-50 p-8 text-center md:my-10 md:p-12">
        <h1 className="text-3xl font-bold text-emerald-900 md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-emerald-900/90">
          We value your privacy. This page outlines how we collect, use, and
          safeguard your data on {BRAND.name}. No user data is ever sold or
          shared without consent.
        </p>
      </div>
    </section>
  );
}
