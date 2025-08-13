import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InternLink: Onboarding & Weekly Reports | Jumuika Hub KE",
  description:
    "InternLink is a simple WhatsApp-first workflow for interns to onboard, submit weekly reports, and stay in sync with supervisors.",
  keywords: [
    "InternLink",
    "internship",
    "weekly reports",
    "onboarding",
    "WhatsApp automation",
    "Jumuika Hub KE",
  ],
};

export default function InternLinkPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      <header className="mx-auto mb-8 max-w-3xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-emerald-900 sm:text-4xl">
          InternLink: Onboarding &amp; Weekly Reports
        </h1>
        <p className="mt-4 text-emerald-950/80">
          Welcome to <strong>InternLink</strong> — a simple, secure way for
          students to onboard, submit weekly reports, and stay in sync with
          supervisors via WhatsApp. No apps to install.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-3">
        <Card
          title="1) Quick Onboarding"
          body="Register your profile and confirm your WhatsApp number. We’ll use it to send reminders and confirm submissions."
        />
        <Card
          title="2) Submit Weekly Reports"
          body="Fill a short weekly form and attach proof (if required). Your supervisor gets an instant WhatsApp notification."
        />
        <Card
          title="3) Stay in Sync"
          body="You’ll receive reminders, feedback, and status updates — all through WhatsApp. Zero friction."
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="https://wa.me/254700000000?text=Hi%20Jumuika!%20I%27d%20like%20to%20onboard%20to%20InternLink."
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          Onboard via WhatsApp
          <span aria-hidden>→</span>
        </Link>

        {/* Replace the # below with your live weekly–report form link */}
        <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-xl border border-emerald-700 px-5 py-3 text-emerald-800 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          Submit Weekly Report
        </Link>
      </div>

      <div className="mt-10 rounded-xl bg-emerald-50/60 p-5 text-sm text-emerald-950/80">
        <p className="font-semibold">Privacy</p>
        <p className="mt-1">
          Your data is used only for internship coordination. Reports are
          visible to your assigned supervisor and authorized institution
          admins. Learn more in our{" "}
          <Link href="/privacy" className="underline decoration-emerald-600">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-emerald-900">{title}</h3>
      <p className="mt-2 text-emerald-950/80">{body}</p>
    </div>
  );
}
