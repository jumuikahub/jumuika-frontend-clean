// app/(site)/privacy/page.tsx
import constants from "@/lib/constants";
const { BRAND_NAME } = constants;

export const metadata = {
  title: `Privacy • ${BRAND_NAME}`,
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center shadow-sm">
          <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-zinc-700">
            We value your privacy. This page outlines how we collect, use, and safeguard your data
            on {BRAND_NAME}. No user data is ever sold or shared without consent.
          </p>
        </div>
      </div>
    </section>
  );
}
