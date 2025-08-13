import Link from "next/link";

export const metadata = {
  title: "InternLink — Submit Weekly Report",
  description:
    "Submit a short weekly report and (optionally) attach proof. Supervisors receive instant WhatsApp notifications.",
};

export default function WeeklyReportPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-900">
        Submit Weekly Report
      </h1>

      <p className="mt-4 text-zinc-700">
        Fill the form below and attach any proof if required. Your supervisor will be notified.
      </p>

      <div className="mt-8 rounded-2xl border border-emerald-100 p-6 shadow-sm bg-white">
        {/* Stub form — replace with your real form / upload widget */}
        <form className="grid gap-4">
          <label className="grid gap-1">
            <span className="text-sm font-medium">Week ending</span>
            <input type="date" className="rounded-lg border p-2" />
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Summary</span>
            <textarea className="rounded-lg border p-2" rows={5} placeholder="What did you do this week?" />
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Attachment (optional)</span>
            <input type="file" className="rounded-lg border p-2" />
          </label>

          <button
            type="submit"
            className="h-11 rounded-xl px-5 font-medium bg-emerald-700 text-white hover:bg-emerald-800 transition"
          >
            Submit Report
          </button>
        </form>
      </div>

      <div className="mt-8">
        <Link
          href="/internlink"
          className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
        >
          ← Back to InternLink
        </Link>
      </div>
    </main>
  );
}
