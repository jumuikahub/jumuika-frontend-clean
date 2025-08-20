// app/vendor-dashboard/page.tsx
import Link from "next/link";
import constants from "@/lib/constants";
const { BRAND, WHATSAPP_CTA_URL } = constants;

export const metadata = {
  title: `Vendor Dashboard • ${BRAND}`,
  robots: { index: false, follow: false },
};

export default function VendorDashboard() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight">Vendor Dashboard</h1>
      <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
        Your lightweight dashboard will live here — listings, orders, and
        messaging — connected to WhatsApp.
      </p>

      <div className="mt-8 flex justify-center">
        <Link href={WHATSAPP_CTA_URL} target="_blank" className="btn-primary">
          Contact Support via WhatsApp
        </Link>
      </div>
    </main>
  );
}
