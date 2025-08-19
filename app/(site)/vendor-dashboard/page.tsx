// app/(site)/vendor-dashboard/page.tsx
import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Vendor Dashboard • ${BRAND.name}`,
  description:
    "A lightweight dashboard for vendors — listings, orders and messaging connected to WhatsApp.",
  robots: { index: false, follow: false }, // keep it semi-hidden until live
};

export default function VendorDashboard() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-center">
      <h1 className="text-3xl font-bold text-zinc-900 md:text-4xl">
        Vendor Dashboard
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-zinc-600">
        Your lightweight dashboard will live here. Listings, orders and messaging
        — connected to WhatsApp.
      </p>
    </main>
  );
}
