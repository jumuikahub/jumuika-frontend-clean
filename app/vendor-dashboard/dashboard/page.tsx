// app/vendor-dashboard/dashboard/page.tsx

import { BRAND } from "@/lib/constants";

export const metadata = {
  title: `Vendor Dashboard – ${BRAND}`,
  description: `Manage your store with ${BRAND}`,
};

export default function VendorDashboardPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Vendor Dashboard</h1>
      <p className="text-gray-700">
        Welcome to your vendor dashboard on {BRAND}.
      </p>
    </div>
  );
}
