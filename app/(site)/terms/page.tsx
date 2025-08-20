// app/(site)/terms/page.tsx
import constants from "@/lib/constants";
const { BRAND_NAME } = constants;

export const metadata = {
  title: `Terms & Conditions • ${BRAND_NAME}`,
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center shadow-sm">
          <h1 className="text-3xl font-semibold tracking-tight">Terms &amp; Conditions</h1>
          <p className="mt-3 text-zinc-700">
            By using {BRAND_NAME}, you agree to transact respectfully and comply with applicable
            laws. Services are provided &quot;as-is&quot; and may change as we improve the product.
          </p>
        </div>
      </div>
    </section>
  );
}
