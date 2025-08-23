// app/vendor-dashboard/dashboard/page.tsx
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: `Vendor Dashboard - ${BRAND}`,
};

export default function DashboardPage() {
  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">{BRAND} Vendor Dashboard</h1>
      <p>Welcome to your vendor dashboard. Manage your listings, sales, and account here.</p>
    </section>
  );
}
