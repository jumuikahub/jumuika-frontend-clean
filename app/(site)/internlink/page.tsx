import { Button } from '@/components/ui';

export default function InternLinkPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="rounded-3xl bg-emerald-50 p-8 sm:p-12">
        <h1 className="text-4xl font-extrabold leading-tight text-emerald-900 sm:text-5xl">
          InternLink: Onboarding &amp; Weekly Reports
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-emerald-900/80">
          Welcome to <strong>InternLink</strong> — a simple, secure way for students to onboard,
          submit weekly reports, and stay in sync with supervisors via WhatsApp. No apps to install.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-emerald-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-emerald-900">1) Quick Onboarding</h3>
            <p className="mt-2 text-emerald-900/80">
              Register your profile and confirm your WhatsApp number for reminders and submissions
              confirmations.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-emerald-900">
              2) Submit Weekly Reports
            </h3>
            <p className="mt-2 text-emerald-900/80">
              Fill a short weekly form (attach proof if needed). Your supervisor gets an instant
              WhatsApp notification.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-emerald-900">3) Stay in Sync</h3>
            <p className="mt-2 text-emerald-900/80">
              Receive reminders, feedback, and status updates — all through WhatsApp. Zero friction.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {/* Internal links as anchors to satisfy Button typing */}
          <Button as="a" href="/internlink/onboard" variant="primary">
            Onboard via WhatsApp
          </Button>

          <Button as="a" href="/internlink/weekly-report" variant="primary">
            Submit Weekly Report
          </Button>
        </div>
      </section>
    </main>
  );
}
