// app/(site)/blog/page.tsx

import { BRAND } from "@/lib/constants";

export const metadata = {
  title: `Blog – ${BRAND}`,
  description: `Insights and updates from ${BRAND}`,
};

export default function BlogPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Our Blog</h1>
      <p className="text-gray-700">
        Stay updated with the latest from {BRAND}.
      </p>
    </div>
  );
}
