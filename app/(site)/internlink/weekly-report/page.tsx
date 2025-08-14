import Link from "next/link";
import { Button } from "@/components/ui";

export const metadata = {
  title: "InternLink • Submit Weekly Report | Jumuika Hub KE",
};

export default function WeeklyReportPage() {
  return (
    <main className="relative min-h-[70vh] px-6 py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-emerald-50 via-white to-emerald-100"
      />
      <h1 className="text-3xl sm:text-4xl font-extrabold text-emerald-900">
        Submit Weekly Report
      </h1>
      <p className="mt-2 text-muted-foreground">
        Fill the form below and attach any proof if required. Your supervisor
        will be notified.
      </p>

      <form className="mt-6 max-w-3xl space-y-4">
        <label className="block">
          <span className="block text-sm font-medium text-gray-700">Week ending</span>
          <input
            type="date"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-gray-700">Summary</span>
          <textarea
            rows={6}
            placeholder="What did you do this week?"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-gray-700">Attachment (optional)</span>
          <input
            type="file"
            className="mt-1 block w-full text-sm text-gray-600 file:mr-4 file:rounded-md file:border-0 file:bg-emerald-50 file:px-4 file:py-2 file:text-emerald-700 hover:file:bg-emerald-100"
          />
        </label>

        <Button type="submit" variant="emerald" className="h-11 px-6 rounded-xl">
          Submit Report
        </Button>
      </form>

      <div className="mt-6">
        <Link href="/internlink" className="text-emerald-700 hover:underline">
          ← Back to InternLink
        </Link>
      </div>
    </main>
  );
}
