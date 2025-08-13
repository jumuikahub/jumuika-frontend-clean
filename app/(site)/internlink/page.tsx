// app/(site)/internlink/page.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InternLinkPage() {
  return (
    <main className="relative">
      {/* background tint for consistency */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-gradient-to-b from-emerald-100/50 to-transparent
          [mask-image:radial-gradient(1200px_600px_at_50%_0%,black,transparent)]
          sm:[mask-image:radial-gradient(1400px_700px_at_50%_0%,black,transparent)]
        "
        aria-hidden="true"
      />

      <section className="mx-auto max-w-5xl px-4 py-14 sm:py-16">
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-900">
          InternLink: Onboarding & Weekly Reports
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
          Welcome to <strong>InternLink</strong> — a simple, secure way for students to
          onboard, submit weekly reports, and stay in sync with supervisors via WhatsApp.
          No apps to install.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-emerald-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-emerald-900">1) Quick Onboarding</h3>
            <p className="mt-2 text-slate-600">
              Register your profile and confirm your WhatsApp number for reminders and
              submissions confirmations.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-emerald-900">2) Submit Weekly Reports</h3>
            <p className="mt-2 text-slate-600">
              Fill a short weekly form (attach proof if needed). Your supervisor gets an
              instant WhatsApp notification.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-emerald-900">3) Stay in Sync</h3>
            <p className="mt-2 text-slate-600">
              Receive reminders, feedback, and status updates — all through WhatsApp.
              Zero friction.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="https://wa.me/254700000000?text=Hi%2C%20I%27d%20like%20to%20onboard%20to%20InternLink"
            className="
              group inline-flex items-center justify-center gap-2
              rounded-xl bg-emerald-700 px-5 py-3 text-white
              shadow-sm transition-all hover:bg-emerald-800
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/60
            "
          >
            <span>Onboard via WhatsApp</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="https://wa.me/254700000000?text=Weekly%20report%20for%20InternLink"
            className="
              group inline-flex items-center justify-center gap-2
              rounded-xl border border-emerald-700/60 px-5 py-3
              text-emerald-800 transition-all hover:bg-emerald-50
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/60
            "
          >
            <span>Submit Weekly Report</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
