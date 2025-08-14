import { Button } from '@/components/ui';

export default function OnboardPage() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-emerald-900">
          Quick Onboarding
        </h1>
        <p className="mt-3 text-zinc-700">
          Register your profile and confirm your WhatsApp number. We’ll use it to send
          reminders and confirm submissions.
        </p>

        <form className="mt-8 space-y-4 rounded-xl border p-6">
          <label className="block">
            <span className="text-sm font-medium text-zinc-700">Full name</span>
            <input className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="Jane Doe" />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-zinc-700">WhatsApp number</span>
            <input className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="+2547XXXXXXXX" />
          </label>

          <div className="pt-2">
            <Button href="https://wa.me/254104250912" target="_blank" rel="noopener">
              Complete Onboarding
            </Button>
          </div>
        </form>

        <div className="mt-6 flex items-center justify-between text-sm">
          <a className="text-emerald-700 hover:underline" href="/internlink">
            ← Back to InternLink
          </a>
          <a
            className="text-emerald-700 hover:underline"
            href="https://wa.me/254104250912"
            target="_blank"
            rel="noopener"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
