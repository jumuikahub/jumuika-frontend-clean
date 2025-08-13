// app/(site)/internlink/onboard/page.tsx
import Link from "next/link";

export const metadata = {
  title: "InternLink — Onboard",
  description: "Quick onboarding via WhatsApp for students.",
};
export const revalidate = 0;

export default function OnboardPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-emerald-900">Onboard via WhatsApp</h1>
      <p className="mt-4 text-emerald-900/80">
        Tap the button below to open WhatsApp and complete your InternLink onboarding.
      </p>

      <div className="mt-8">
        <a
          href="https://wa.me/254700000000?text=InternLink%20onboarding"
          className="inline-flex h-12 min-w-[240px] items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 font-semibold text-white hover:bg-emerald-800"
        >
          Open WhatsApp
        </a>
      </div>

      <div className="mt-10">
        <Link href="/internlink" className="text-emerald-700 hover:underline">
          ← Back to InternLink
        </Link>
      </div>
    </main>
  );
}
