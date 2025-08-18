// app/vendors/page.tsx
import Link from "next/link";

export default function VendorsLanding() {
  return (
    <section className="mx-auto max-w-3xl text-center">
      <h1 className="text-3xl font-bold tracking-tight">For Vendors</h1>
      <p className="mt-3 text-slate-600">
        Manage listings, orders, and WhatsApp messaging in real-time.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <Link
          href="/vendors/dashboard"
          className="rounded-lg bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-700"
        >
          Open Vendor Dashboard
        </Link>
        <a
          href="https://wa.me/254104250912"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border px-5 py-3 text-slate-800 hover:bg-slate-50"
        >
          Request Access via WhatsApp
        </a>
      </div>
    </section>
  );
}
