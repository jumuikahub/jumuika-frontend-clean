// app/vendor-dashboard/page.tsx
import constants from "@/lib/constants";
const { BRAND_NAME } = constants;

export const metadata = {
  title: `Vendor Dashboard • ${BRAND_NAME}`,
  robots: { index: false, follow: false }, // keep semi-hidden until live
};

export default function VendorDashboard() {
  return (
    <main className="section">
      <div className="wrap">
        <h1 className="mt-16 text-center text-3xl font-semibold tracking-tight">
          Vendor Dashboard
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-700">
          Your lightweight dashboard will live here. Listings, orders and messaging —
          connected to WhatsApp.
        </p>
      </div>
    </main>
  );
}
