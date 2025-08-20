// app/vendor-dashboard/page.tsx
import Link from "next/link";
import constants from "@/lib/constants";

const { BRAND_NAME, WHATSAPP_CTA_URL } = constants;

export const metadata = {
  title: `Vendor Dashboard • ${BRAND_NAME}`,
  robots: { index: false, follow: false }, // keep it semi-hidden until live
};

export default function VendorDashboard() {
  return (
    <section className="mx-auto max-w-4xl py-10 text-center">
      <h1 className="text-3xl font-bold md:text-4xl">Vendor Dashboard</h1>
      <p className="mx-auto mt-4 max-w-2xl text-neutral-700">
        Your lightweight dashboard will live here — listings, orders, and
        messaging — connected to WhatsApp.
      </p>

      <div className="mt-8">
        <Link
          href={WHATSAPP_CTA_URL}
          target="_blank"
          className="rounded-lg bg-primary px-6 py-3 text-white shadow hover:bg-primary/90"
        >
          Onboard via WhatsApp
        </Link>
      </div>
    </section>
  );
}
