import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PSC Dashboard | Jumuika Hub KE",
  description:
    "Public Service Commission interface for broadcasting updates to interns and institutions via WhatsApp.",
  keywords: [
    "PSC",
    "broadcast",
    "announcements",
    "internship program",
    "Jumuika Hub KE",
  ],
};

export default function PSCPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
    <header className="mx-auto mb-8 max-w-3xl text-center">
      <h1 className="text-3xl font-extrabold tracking-tight text-emerald-900 sm:text-4xl">
        PSC Dashboard
      </h1>
      <p className="mt-4 text-emerald-950/80">
        A focused surface for the Public Service Commission to share
        announcements, deadlines, and program updates with interns and
        institutions — delivered reliably over WhatsApp.
      </p>
    </header>

    <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-emerald-900">
        Broadcast (Preview)
      </h2>
      <p className="mt-2 text-emerald-950/80">
        This is a frontend mock. Connect it to your messaging backend or
        WhatsApp BSP (Business Solution Provider). You can target audiences
        by cohort, institution, county, or custom tags.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <StaticTile title="Create Announcement" detail="Compose and preview template messages before sending." />
        <StaticTile title="Target Audience" detail="Select interns by cohort, institution, or tag filters." />
        <StaticTile title="Delivery & Logs" detail="Track delivery, failures, and responses at a glance." />
      </div>

      <div className="mt-6">
        <Link
          href="https://wa.me/254700000000?text=Hi%20Jumuika!%20Please%20enable%20PSC%20broadcast%20access."
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          Request PSC Access via WhatsApp
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  </section>
  );
}

function StaticTile({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="rounded-xl bg-emerald-50/60 p-4">
      <p className="text-sm font-semibold text-emerald-900">{title}</p>
      <p className="mt-2 text-sm text-emerald-950/80">{detail}</p>
    </div>
  );
}
