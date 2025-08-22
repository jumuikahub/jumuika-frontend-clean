// app/(site)/privacy/page.tsx

import { BRAND } from "@/lib/constants";

export const metadata = {
  title: `Privacy Policy – ${BRAND}`,
  description: `Privacy practices at ${BRAND}`,
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-700">
        Your privacy is important to us at {BRAND}.
      </p>
    </div>
  );
}
