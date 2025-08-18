import Link from "next/link";
import { WHATSAPP_CTA } from "@/lib/constants";

export const metadata = {
  title: "Institutions • Jumuika Hub KE",
  description:
    "Tools for institutions to coordinate vendors and student services over WhatsApp.",
};

export default function InstitutionsPage() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="rounded-3xl border bg-emerald-50/60 p-6 sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">
            Partner with Jumuika Hub KE
          </h1>
          <p className="mt-3 text-slate-700">
            Coordinate campus vendors, student services, and institutional
            programs using WhatsApp-first workflows.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Vendor Directory
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Curate approved vendors and services accessible to your students
              via WhatsApp.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Announcements
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Share official notices and programs with real-time WhatsApp
              updates.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Reporting &amp; Oversight
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Visibility into vendor activity and student engagement across your
              institution.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WHATSAPP_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700"
          >
            Talk to Us on WhatsApp
          </a>
          <Link
            href="/internlink"
            className="rounded-xl border px-5 py-3 text-slate-800 hover:bg-slate-50"
          >
            Explore InternLink
          </Link>
        </div>
      </div>
    </section>
  );
}
