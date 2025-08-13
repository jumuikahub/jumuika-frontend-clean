import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manager Portal | Jumuika Hub KE",
  description:
    "Managers can review interns’ weekly reports, acknowledge submissions, and share feedback — all connected to WhatsApp.",
  keywords: [
    "manager",
    "supervisor",
    "intern reports",
    "review",
    "Jumuika Hub KE",
  ],
};

export default function ManagerPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      <header className="mx-auto mb-8 max-w-3xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-emerald-900 sm:text-4xl">
          Manager Portal
        </h1>
        <p className="mt-4 text-emerald-950/80">
          A streamlined workspace for supervisors to review, acknowledge, and
          respond to weekly reports. WhatsApp notifications keep everyone in
          sync.
        </p>
      </header>

      <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-emerald-900">
          Sign In (Preview)
        </h2>
        <p className="mt-2 text-emerald-950/80">
          This is a frontend placeholder. Hook it up to your preferred auth
          (NextAuth, JWT, or SSO). Once authenticated, show only the reports
          for interns assigned to the logged-in manager.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-emerald-50/60 p-4">
            <p className="text-sm font-semibold text-emerald-900">
              Sample Actions
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm text-emerald-950/80">
              <li>View pending weekly reports</li>
              <li>Acknowledge or request changes</li>
              <li>Add quick feedback</li>
              <li>Notify intern via WhatsApp</li>
            </ul>
          </div>

          <div className="rounded-xl bg-emerald-50/60 p-4">
            <p className="text-sm font-semibold text-emerald-900">
              Integrations
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm text-emerald-950/80">
              <li>CSV/Excel export</li>
              <li>Webhook to your MIS</li>
              <li>WhatsApp templates for responses</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="https://wa.me/254700000000?text=Hi%20Jumuika!%20Please%20enable%20Manager%20access%20for%20me."
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            Request Manager Access via WhatsApp
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
