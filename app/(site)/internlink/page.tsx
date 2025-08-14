import Link from "next/link";
import { ArrowRight, FileEdit, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui";

export const metadata = {
  title: "InternLink | Jumuika Hub KE",
  description:
    "Onboarding & weekly reports for students via WhatsApp. Stay in sync with supervisors — zero friction.",
};

export default function InternLinkPage() {
  return (
    <main className="relative min-h-[70vh] px-6 py-12 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-emerald-50 via-white to-emerald-100"
      />
      <h1 className="text-3xl sm:text-4xl font-extrabold text-emerald-900">
        InternLink: Onboarding & Weekly Reports
      </h1>
      <p className="mt-3 max-w-3xl mx-auto text-lg text-muted-foreground">
        Welcome to <span className="font-semibold">InternLink</span> — a simple,
        secure way for students to onboard, submit weekly reports, and stay in
        sync with supervisors via WhatsApp.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl bg-white shadow-sm border p-6">
          <h3 className="text-xl font-semibold text-emerald-800">
            1) Quick Onboarding
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Register your profile and confirm your WhatsApp number for reminders
            and confirmations.
          </p>
        </div>
        <div className="rounded-xl bg-white shadow-sm border p-6">
          <h3 className="text-xl font-semibold text-emerald-800">
            2) Submit Weekly Reports
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Fill a short weekly form and attach proof (if needed). Your
            supervisor gets an instant WhatsApp notification.
          </p>
        </div>
        <div className="rounded-xl bg-white shadow-sm border p-6">
          <h3 className="text-xl font-semibold text-emerald-800">3) Stay in Sync</h3>
          <p className="mt-2 text-sm text-gray-600">
            Get reminders, feedback, and updates — all through WhatsApp. Zero
            friction.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/internlink/onboard" className="inline-block">
          <Button
            variant="emerald"
            className="h-11 px-6 rounded-xl shadow-sm hover:shadow-md hover:shadow-emerald-900/10"
          >
            <span className="mr-2">Onboard via WhatsApp</span>
            <MessageCircle className="h-4 w-4" />
          </Button>
        </Link>

        <Link href="/internlink/weekly-report" className="inline-block">
          <Button variant="outline" className="h-11 px-6 rounded-xl">
            <span className="mr-2">Submit Weekly Report</span>
            <FileEdit className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
