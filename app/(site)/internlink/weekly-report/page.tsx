import { Button } from '@/components/ui';

export default function WeeklyReportPage() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-emerald-900">
          Submit Weekly Report
        </h1>
        <p className="mt-3 text-zinc-700">
          Fill the form below and attach any proof if required. Your supervisor will be notified.
        </p>

        <form className="mt-8 space-y-4 rounded-xl border p-6">
          <label className="block">
            <span className="text-sm font-medium text-zinc-700">Week ending</span>
            <input type="date" className="mt-1 w-full rounded-lg border px-3 py-2" />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-zinc-700">Summary</span>
            <textarea rows={6} className="mt-1 w-full rounded-lg border px-3 py-2"
              placeholder="What did you do this week?" />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-zinc-700">Attachment (optional)</span>
            <input type="file" className="mt-1 block w-full text-sm" />
          </label>

          <div className="pt-2">
            <Button href="https://wa.me/254104250912" target="_blank" rel="noopener">
              Submit Report
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
