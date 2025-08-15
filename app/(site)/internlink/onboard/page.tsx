// app/(site)/internlink/onboard/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "InternLink • Quick Onboarding",
  description:
    "Register your profile and confirm your WhatsApp number for InternLink reminders and submission confirmations.",
};

export default function InternlinkOnboardPage() {
  return (
    <main className="min-h-[60vh] w-full">
      <section className="mx-auto w-full max-w-4xl px-4 py-14 sm:py-16">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-b from-emerald-50 to-white p-6 sm:p-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-emerald-900 sm:text-4xl">
            Quick Onboarding
          </h1>

          <p className="mt-3 max-w-2xl text-emerald-900/80">
            Register your profile and confirm your WhatsApp number. We’ll use it
            to send reminders and confirm submissions.
          </p>

          {/* CTA */}
          <div className="pt-2">
            <Button
              as="a"
              href="https://wa.me/254104250912"
              target="_blank"
              rel="noopener"
              variant="primary"
            >
              Complete Onboarding
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm text-emerald-900/70">
            <Link href="/internlink" className="hover:underline">
              ← Back to InternLink
            </Link>
            <a
              href="https://wa.me/254104250912"
              target="_blank"
              rel="noopener"
              className="hover:underline"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
