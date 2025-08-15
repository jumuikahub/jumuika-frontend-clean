import { Button } from '@/components/ui';

export default function OnboardPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <section className="rounded-3xl bg-emerald-50 p-8 sm:p-12">
        <h1 className="text-3xl font-extrabold text-emerald-900 sm:text-4xl">
          Quick Onboarding
        </h1>

        <p className="mt-4 text-emerald-900/80">
          Register your profile and confirm your WhatsApp number. We’ll use it to send reminders and
          confirm submissions.
        </p>

        {/* Your actual form fields would go here. Kept minimal for brevity. */}

        <div className="pt-2">
          {/* WhatsApp CTA — must render as anchor */}
          <Button
            as="a"
            href="https://wa.me/254104250912"
            target="_blank"
            rel="noopener"
            variant="primary"
          >
            Complete Onboarding
          </Button>
        </div>
      </section>
    </main>
  );
}
