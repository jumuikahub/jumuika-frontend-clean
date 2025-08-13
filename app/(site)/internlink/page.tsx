import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function InternLinkPage() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-emerald-900 text-center">
          InternLink: Onboarding & Weekly Reports
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-slate-700">
          Welcome to <strong>InternLink</strong> — a simple, secure way for students to
          onboard, submit weekly reports, and stay in sync with supervisors via WhatsApp.
          No apps to install.
        </p>

        {/* … your three cards … */}

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/internlink/onboard" variant="primary" size="lg">
            Onboard via WhatsApp
            <ArrowRight className="size-4" />
          </ButtonLink>
          <ButtonLink href="/internlink/weekly-report" variant="secondary" size="lg">
            Submit Weekly Report
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
