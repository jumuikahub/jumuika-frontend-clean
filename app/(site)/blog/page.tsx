import Link from "next/link";

export const metadata = {
  title: "Blog • Jumuika Hub KE",
  description:
    "Updates, playbooks, and stories from Jumuika Hub KE’s WhatsApp-first toolkit.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-4xl">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Jumuika Hub KE Blog
        </h1>
        <p className="mt-3 text-slate-700">
          Insights on WhatsApp commerce, vendor enablement, and student
          services. Articles are coming soon — stay tuned!
        </p>

        <div className="mt-8">
          <Link
            href="/how-it-works"
            className="rounded-xl border px-5 py-3 text-slate-800 hover:bg-slate-50"
          >
            Start with: How it works
          </Link>
        </div>
      </div>
    </section>
  );
}
