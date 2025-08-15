// app/(site)/internlink/onboard/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui";

export default function OnboardPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold text-emerald-900">Quick Onboarding</h1>
      <p className="mt-2 text-slate-700">
        Register your profile and confirm your WhatsApp number. We’ll use it to
        send reminders and confirm submissions.
      </p>

      {/* Simple example form UI to match earlier visuals; adjust as needed */}
      <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6">
        <label className="block text-sm font-medium text-slate-700">
          Full name
        </label>
        <input
          type="text"
          placeholder="Jane Doe"
          className="mt-1 w-full rounded-xl border border-emerald-200 bg-white px-3 py-2 outline-none focus:border-emerald-400"
        />

        <label className="mt-4 block text-sm font-medium text-slate-700">
          WhatsApp number
        </label>
        <input
          type="tel"
          placeholder="+2547XXXXXXXX"
          className="mt-1 w-full rounded-xl border border-emerald-200 bg-white px-3 py-2 outline-none focus:border-emerald-400"
        />

        <div className="pt-4">
          {/* IMPORTANT: when using href, tell Button to render an anchor */}
          <Button as="a" href="https://wa.me/254104250912" target="_blank" rel="noopener">
            Complete Onboarding
          </Button>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm">
        <Link href="/internlink" className="text-emerald-700 hover:underline">
          ← Back to InternLink
        </Link>

        <a
          href="https://wa.me/254104250912"
          target="_blank"
          rel="noopener"
          className="text-emerald-700 hover:underline"
        >
          Message us on WhatsApp
        </a>
      </div>
    </main>
  );
}
