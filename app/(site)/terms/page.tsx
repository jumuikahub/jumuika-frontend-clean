// app/(site)/terms/page.tsx

import { BRAND } from "@/lib/constants";

export const metadata = {
  title: `Terms & Conditions – ${BRAND}`,
  description: `Terms of service for ${BRAND}`,
};

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
      <p className="text-gray-700">
        By using {BRAND}, you agree to our terms and conditions.
      </p>
    </div>
  );
}
