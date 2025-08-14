import Link from "next/link";
import { Button } from "@/components/ui";

export const metadata = {
  title: "InternLink • Quick Onboarding | Jumuika Hub KE",
};

export default function InternOnboardPage() {
  return (
    <main className="relative min-h-[70vh] px-6 py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-emerald-50 via-white to-emerald-100"
      />
      <h1 className="text-3xl sm:text-4xl font-extrabold text-emerald-900">
        Quick Onboarding
      </h1>
      <p className="mt-2 text-muted-foreground">
        Register your profile and confirm your WhatsApp number. We’ll use it to
        send reminders and confirm submissions.
      </p>

      <form className="mt-6 max-w-2xl space-y-4">
        <label className="block">
          <span className="block text-sm font-medium text-gray-700">Full name</span>
          <input
            type="text"
            placeholder="Jane Doe"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-gray-700">WhatsApp number</span>
          <input
            type="tel"
            placeholder="+2547XXXXXXXX"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </label>

        <Button
          type="submit"
          variant="emerald"
          className="mt-2 h-11 px-6 rounded-xl shadow-sm"
        >
          Complete Onboarding
        </Button>
      </form>

      <div className="mt-6 flex items-center gap-4">
        <Link href="/internlink" className="text-emerald-700 hover:underline">
          ← Back to InternLink
        </Link>
        <Link
          href="https://wa.me/254700000000"
          target="_blank"
          className="text-emerald-700 hover:underline"
        >
          Message us on WhatsApp
        </Link>
      </div>
    </main>
  );
}
