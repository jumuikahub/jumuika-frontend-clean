// app/(site)/internlink/page.tsx
import React from 'react';
import { Button } from '@/components/ui';

export const metadata = {
  title: 'InternLink: Onboarding & Weekly Reports',
  description:
    'A simple, secure way for students to onboard, submit weekly reports, and stay in sync with supervisors via WhatsApp. No apps to install.',
};

export default function InternLinkLanding() {
  return (
    <main className="relative">
      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:py-16">
        <div className="rounded-3xl bg-emerald-50/70 p-6 sm:p-10 ring-1 ring-emerald-100">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-900">
            InternLink: Onboarding &amp; Weekly Reports
          </h1>

          <p className="mt-3 text-emerald-900/80 sm:text-lg">
            Welcome to <strong>InternLink</strong> — a simple, secure way for students to onboard,
            submit weekly reports, and stay in sync with supervisors via WhatsApp. No apps to install.
          </p>

          {/* Steps */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 ring-1 ring-emerald-100">
              <h3 className="text-lg font-semibold text-emerald-900">
                1) Quick Onboarding
              </h3>
              <p className="mt-2 text-emerald-900/75 text-sm">
                Register your profile and confirm your WhatsApp number for reminders and
                submission confirmations.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 ring-1 ring-emerald-100">
              <h3 className="text-lg font-semibold text-emerald-900">
                2) Submit Weekly Reports
              </h3>
              <p className="mt-2 text-emerald-900/75 text-sm">
                Fill a short weekly form (attach proof if needed). Your supervisor gets an instant
                WhatsApp notification.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 ring-1 ring-emerald-100">
              <h3 className="text-lg font-semibold text-emerald-900">
                3) Stay in Sync
              </h3>
              <p className="mt-2 text-emerald-900/75 text-sm">
                Receive reminders, feedback, and status updates — all through WhatsApp. Zero friction.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button as="a" href="/internlink/onboard" className="min-w-[240px]">
              Onboard via WhatsApp
            </Button>

            <Button
              as="a"
              href="/internlink/weekly-report"
              className="min-w-[240px] bg-white text-emerald-800 hover:bg-emerald-100 ring-1 ring-emerald-200"
            >
              Submit Weekly Report
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
