// app/(site)/internlink/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui";

export default function InternLinkLanding() {
  return (
    <main>
      <section className="bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:py-24">
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-emerald-900 sm:text-5xl">
            InternLink: Onboarding &amp; Weekly Reports
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-emerald-800/90">
            Welcome to <span className="font-semibold">InternLink</span> — a simple,
            secure way for students to onboard, submit weekly reports, and stay in
            sync with supervisors via WhatsApp. No apps to install.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-900">1) Quick Onboarding</h3>
              <p className="mt-2 text-emerald-800/90">
                Register your profile and confirm your WhatsApp number for reminders
                and confirmations.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-900">2) Submit Weekly Reports</h3>
              <p className="mt-2 text-emerald-800/90">
                Fill a short weekly form and attach proof if required. Your supervisor
                is notified instantly.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-900">3) Stay in Sync</h3>
              <p className="mt-2 text-emerald-800/90">
                Get reminders, feedback, and status updates — all via WhatsApp. Zero
                friction.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/internlink/onboard">Onboard via WhatsApp</Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/internlink/weekly-report">Submit Weekly Report</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
