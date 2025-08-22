// app/(site)/about/page.tsx

import { BRAND, TAGLINE } from "@/lib/constants";

export const metadata = {
  title: `About ${BRAND}`,
  description: `${TAGLINE} – Learn more about us.`,
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">About {BRAND}</h1>
      <p className="text-gray-700">
        {BRAND} is {TAGLINE}. Our goal is to empower vendors and buyers via
        WhatsApp-first commerce.
      </p>
    </div>
  );
}
