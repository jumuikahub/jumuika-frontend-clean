// app/(vendor)/dashboard/page.tsx
import Link from "next/link";
import constants from "@/lib/constants";
const { WHATSAPP_CTA_URL } = constants;

export const metadata = {
  title: "Vendor Dashboard • Jumuika Hub KE",
};

export default function VendorDashboardPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 text-center">
      <h1 className="text-4xl sm:text-5xl font-semibold">Vendor Dashboard</h1>
      <p className="mt-4 text-lg text-zinc-600">
        Your lightweight dashboard will live here — listings, orders, and messaging —
        connected to WhatsApp.
      </p>
      <div className="mt-8">
        <Link href={WHATSAPP_CTA_URL} className="btn-primary">
          Join Vendor Waitlist via WhatsApp
        </Link>
      </div>
    </section>
  );
}
