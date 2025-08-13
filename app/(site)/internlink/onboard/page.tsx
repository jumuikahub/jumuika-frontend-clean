import Link from "next/link";

export const metadata = {
  title: "InternLink — Onboard",
  description:
    "Register for InternLink and confirm your WhatsApp number for reminders and submission confirmations.",
};

export default function OnboardPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-900">
        Quick Onboarding
      </h1>

      <p className="mt-4 text-zinc-700">
        Register your profile and confirm your WhatsApp number. We’ll use it to send
        reminders and confirm submissions.
      </p>

      <div className="mt-8 rounded-2xl border border-emerald-100 p-6 shadow-sm bg-white">
        {/* Stub form — replace with your real form when ready */}
        <form className="grid gap-4">
          <label className="grid gap-1">
            <span className="text-sm font-medium">Full name</span>
            <input className="rounded-lg border p-2" placeholder="Jane Doe" />
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">WhatsApp number</span>
            <input className="rounded-lg border p-2" placeholder="+2547XXXXXXXX" />
          </label>

          <button
            type="submit"
            className="h-11 rounded-xl px-5 font-medium bg-emerald-700 text-white hover:bg-emerald-800 transition"
          >
            Complete Onboarding
          </button>
        </form>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <Link
          href="/internlink"
          className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
        >
          ← Back to InternLink
        </Link>

        {/* Optional: direct WhatsApp deep-link */}
        <a
          href="https://wa.me/254700000000?text=Hi%20Jumuika%20Hub%20KE%20-%20I%20am%20registering%20for%20InternLink"
          className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
          target="_blank"
          rel="noopener noreferrer"
        >
          Message us on WhatsApp →
        </a>
      </div>
    </main>
  );
}
