// app/(site)/internlink/page.tsx
import Link from "next/link";

export const metadata = {
  title: "InternLink: Onboarding & Weekly Reports",
  description:
    "A simple, secure way for students to onboard, submit weekly reports, and stay synced with supervisors via WhatsApp. No apps to install.",
};

export default function InternLinkPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <h1 className="text-center text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">
        InternLink: Onboarding & Weekly Reports
      </h1>

      <p className="mx-auto mt-4 max-w-3xl text-center text-emerald-900/80">
        Welcome to <strong>InternLink</strong> — a simple, secure way for students
        to onboard, submit weekly reports, and stay in sync with supervisors via WhatsApp.
        No apps to install.
      </p>

      <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-semibold text-emerald-900">
            1) Quick Onboarding
          </h3>
          <p className="text-emerald-900/80">
            Register your profile and confirm your WhatsApp number. We’ll use it
            to send reminders and confirm submissions.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-semibold text-emerald-900">
            2) Submit Weekly Reports
          </h3>
          <p className="text-emerald-900/80">
            Fill a short weekly form and attach proof (if required). Your supervisor gets an instant WhatsApp notification.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-semibold text-emerald-900">
            3) Stay in Sync
          </h3>
          <p className="text-emerald-900/80">
            Receive reminders, feedback, and status updates — all through WhatsApp. Zero friction.
          </p>
        </div>
      </section>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="https://wa.me/254700000000?text=Hi%2C%20I%27d%20like%20to%20onboard%20to%20InternLink"
          target="_blank"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-800 px-5 text-white shadow-sm hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-900/40"
        >
          Onboard via WhatsApp →
        </Link>

        <Link
          href="#"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-emerald-900/15 bg-white px-5 text-emerald-900 shadow-sm hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-900/20"
        >
          Submit Weekly Report
        </Link>
      </div>
    </main>
  );
}
