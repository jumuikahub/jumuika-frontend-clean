// app/(site)/terms/page.tsx
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: `Terms & Conditions - ${BRAND}`,
};

export default function TermsPage() {
  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
      <p>These terms govern the use of {BRAND} services.</p>
    </section>
  );
}
