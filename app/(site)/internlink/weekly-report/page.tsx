// app/(site)/internlink/weekly-report/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui";

export default function InternLinkWeeklyReportPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
          <h1 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">
            Submit Weekly Report
          </h1>
          <p className="mt-2 max-w-2xl text-emerald-800/90">
            Fill the form below and attach any proof if required. Your supervisor will
            be notified.
          </p>

          <form className="mt-8 space-y-4 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div>
              <label className="block text-sm font-medium text-emerald-900">Week ending</label>
              <input
                type="date"
                className="mt-1 w-full rounded-xl border border-emerald-200 px-3 py-2 outline-none ring-emerald-400 focus:ring"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-emerald-900">Summary</label>
              <textarea
                rows={6}
                className="mt-1 w-full rounded-xl border border-emerald-200 px-3 py-2 outline-none ring-emerald-400 focus:ring"
                placeholder="What did you do this week?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-emerald-900">
                Attachment (optional)
              </label>
              <input
                type="file"
                className="mt-1 w-full rounded-xl border border-emerald-200 bg-white px-3 py-2 file:mr-3 file:rounded-lg file:border-0 file:bg-emerald-600 file:px-3 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-emerald-700"
              />
            </div>

            <Button type="submit" className="w-full sm:w-auto">
              Submit Report
            </Button>
          </form>

          <div className="mt-6">
            <Link href="/internlink" className="text-sm font-medium text-emerald-900 hover:underline">
              ← Back to InternLink
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
