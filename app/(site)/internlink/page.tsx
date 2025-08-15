// app/(site)/internlink/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui";

export default function InternLinkPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6 sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">
          InternLink: Onboarding & Weekly Reports
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Welcome to <span className="font-semibold">InternLink</span> — a simple,
          secure way for students to onboard, submit weekly reports, and stay in
          sync with supervisors via WhatsApp. No apps to install.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-emerald-100 bg-white p-5">
            <h3 className="text-lg font-semibold text-emerald-900">
              1) Quick Onboarding
            </h3>
            <p className="mt-1 text-slate-700">
              Register your profile and confirm your WhatsApp number for
              reminders and submission confirmations.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-white p-5">
            <h3 className="text-lg font-semibold text-emerald-900">
              2) Submit Weekly Reports
            </h3>
            <p className="mt-1 text-slate-700">
              Fill a short weekly form (attach proof if needed). Your supervisor
              gets an instant WhatsApp notification.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-white p-5">
            <h3 className="text-lg font-semibold text-emerald-900">
              3) Stay in Sync
            </h3>
            <p className="mt-1 text-slate-700">
              Receive reminders, feedback, and status updates — all through
              WhatsApp. Zero friction.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {/* IMPORTANT: when using href, render Button as an anchor */}
          <Button as="a" href="/internlink/onboard" variant="primary">
            Onboard via WhatsApp
          </Button>

          {/* If you keep a second CTA here, make sure it also uses as="a" */}
          <Button as="a" href="/internlink/weekly-report" variant="secondary">
            Submit Weekly Report
          </Button>
        </div>
      </section>
    </main>
  );
}
