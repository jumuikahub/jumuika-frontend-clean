// app/(site)/internlink/weekly-report/page.tsx
import { Button } from "@/components/ui";

export const metadata = {
  title: "Submit Weekly Report | InternLink",
};

export default function WeeklyReportPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <section className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6 sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">
          Submit Weekly Report
        </h1>
        <p className="mt-3 max-w-2xl text-slate-700">
          Fill the form below and attach any proof if required. Your supervisor will
          be notified via WhatsApp.
        </p>

        <form className="mt-8 space-y-6">
          {/* Week ending */}
          <div>
            <label htmlFor="week-ending" className="block text-sm font-medium text-emerald-900">
              Week ending
            </label>
            <input
              id="week-ending"
              name="week-ending"
              type="date"
              className="mt-2 w-full rounded-xl border border-emerald-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Summary */}
          <div>
            <label htmlFor="summary" className="block text-sm font-medium text-emerald-900">
              Summary
            </label>
            <textarea
              id="summary"
              name="summary"
              rows={6}
              placeholder="What did you do this week?"
              className="mt-2 w-full rounded-xl border border-emerald-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Attachment */}
          <div>
            <label htmlFor="attachment" className="block text-sm font-medium text-emerald-900">
              Attachment (optional)
            </label>
            <input
              id="attachment"
              name="attachment"
              type="file"
              className="mt-2 block w-full text-sm text-slate-700 file:mr-4 file:rounded-lg file:border-0 file:bg-emerald-600 file:px-4 file:py-2 file:font-medium file:text-white hover:file:bg-emerald-700"
            />
          </div>

          {/* WhatsApp submit CTA (MUST render as anchor when using href) */}
          <div className="pt-2">
            <Button
              as="a"
              href="https://wa.me/254104250912"
              target="_blank"
              rel="noopener"
              variant="primary"
            >
              Submit Report
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
