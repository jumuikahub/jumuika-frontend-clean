import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "PSC | Jumuika Hub KE",
  description:
    "Public Service Commission support: onboarding, notices, and WhatsApp-powered engagement.",
  openGraph: {
    title: "PSC | Jumuika Hub KE",
    description:
      "Public Service Commission support: onboarding, notices, and WhatsApp-powered engagement.",
    url: "/psc",
    images: ["/og-image.png"],
  },
};

export default function PSCPage() {
  return (
    <section className="relative isolate">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(90%_60%_at_50%_10%,rgba(16,185,129,0.18),rgba(16,185,129,0)_60%)]" />
      <div className="mx-auto max-w-5xl px-4 py-14 sm:py-18 lg:py-20">
        <h1 className="text-center text-3xl font-extrabold tracking-tight text-emerald-900 sm:text-4xl">
          PSC — WhatsApp-powered Services
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-emerald-900/80">
          From notices to application reminders — Jumuika Hub KE helps PSC
          teams communicate and collect information instantly over WhatsApp.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            ["Broadcast Notices", "Reach candidates instantly with verified updates."],
            ["Collect Submissions", "Forms and documents via secure links."],
            ["Automated Reminders", "Reduce no-shows and missed deadlines."],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-2xl border border-emerald-900/10 bg-white/70 p-5 shadow-sm backdrop-blur"
            >
              <h3 className="font-semibold text-emerald-900">{title}</h3>
              <p className="mt-1 text-sm text-emerald-900/70">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="https://wa.me/254700000000?text=Hello%20PSC%20team%2C%20I'd%20like%20a%20demo"
            className="inline-flex h-11 items-center rounded-xl bg-emerald-800 px-5 font-medium text-white shadow-sm hover:bg-emerald-900"
          >
            Request a Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex h-11 items-center rounded-xl border border-emerald-900/15 bg-white px-5 font-medium text-emerald-900 hover:bg-emerald-50"
          >
            Learn About Jumuika
          </Link>
        </div>
      </div>
    </section>
  );
}
