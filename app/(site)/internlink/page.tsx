import { Button } from '@/components/ui';

export default function InternLinkLanding() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-emerald-900">
          InternLink: Onboarding &amp; Weekly Reports
        </h1>

        <p className="mt-3 max-w-3xl text-zinc-700">
          Welcome to InternLink — a simple, secure way for students to onboard,
          submit weekly reports, and stay in sync with supervisors via WhatsApp.
          No apps to install.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold text-emerald-900">1) Quick Onboarding</h2>
            <p className="mt-2 text-zinc-700">
              Register your profile and confirm your WhatsApp number for reminders
              and submission confirmations.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold text-emerald-900">2) Submit Weekly Reports</h2>
            <p className="mt-2 text-zinc-700">
              Fill a short weekly form (attach proof if needed). Your supervisor
              gets an instant WhatsApp notification.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold text-emerald-900">3) Stay in Sync</h2>
            <p className="mt-2 text-zinc-700">
              Receive reminders, feedback, and status updates — all through WhatsApp.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/internlink/onboard" variant="primary">
            Onboard via WhatsApp
          </Button>

          <Button href="/internlink/weekly-report" variant="secondary">
            Submit Weekly Report
          </Button>
        </div>
      </div>
    </section>
  );
}
