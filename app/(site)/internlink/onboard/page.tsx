// app/(site)/internlink/onboard/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui";

export default function InternLinkOnboardPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
          <h1 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">
            Quick Onboarding
          </h1>
          <p className="mt-2 max-w-2xl text-emerald-800/90">
            Register your profile and confirm your WhatsApp number. We’ll use it to
            send reminders and confirm submissions.
          </p>

          <form className="mt-8 space-y-4 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div>
              <label className="block text-sm font-medium text-emerald-900">Full name</label>
              <input
                type="text"
                className="mt-1 w-full rounded-xl border border-emerald-200 px-3 py-2 outline-none ring-emerald-400 focus:ring"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-emerald-900">WhatsApp number</label>
              <input
                type="tel"
                className="mt-1 w-full rounded-xl border border-emerald-200 px-3 py-2 outline-none ring-emerald-400 focus:ring"
                placeholder="+2547XXXXXXXX"
              />
            </div>

            <Button type="submit" className="w-full sm:w-auto">
              Complete Onboarding
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-between">
            <Link href="/internlink" className="text-sm font-medium text-emerald-900 hover:underline">
              ← Back to InternLink
            </Link>

            <Link
              href="https://wa.me/254104250912"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-emerald-900 hover:underline"
            >
              Message us on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
