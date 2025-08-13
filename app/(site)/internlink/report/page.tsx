// app/(site)/internlink/report/page.tsx
import Link from "next/link";

export const metadata = {
  title: "InternLink — Weekly Report",
  description: "Submit your weekly report.",
};
export const revalidate = 0;

export default function WeeklyReportPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-emerald-900">Submit Weekly Report</h1>
      <p className="mt-4 text-emerald-900/80">
        Share your weekly update. If your program requires proof, attach it when you send
        the message on WhatsApp.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="https://wa.me/254700000000?text=Weekly%20Report%3A%20"
          className="inline-flex h-12 min-w-[240px] items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 font-semibold text-white hover:bg-emerald-800"
        >
          Send on WhatsApp
        </a>
        <Link
          href="/internlink"
          className="inline-flex h-12 items-center rounded-xl border border-emerald-300 px-6 font-semibold text-emerald-800 hover:bg-emerald-50"
        >
          Back to InternLink
        </Link>
      </div>
    </main>
  );
}
