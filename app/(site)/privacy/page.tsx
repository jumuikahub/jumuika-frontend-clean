// app/(site)/privacy/page.tsx
export const metadata = {
  title: "Privacy • Jumuika Hub KE",
};

export default function PrivacyPage() {
  return (
    <section className="space-y-6">
      <header className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 text-center">
        <h1 className="text-2xl font-bold">Privacy Policy</h1>
        <p className="mx-auto mt-2 max-w-3xl text-zinc-700">
          We value your privacy. This page outlines how we collect, use, and
          safeguard your data on Jumuika Hub KE. No user data is ever sold or
          shared without consent.
        </p>
      </header>

      <div className="prose prose-zinc mx-auto max-w-3xl">
        <p>
          We collect the minimum necessary information to provide our WhatsApp-
          first services. You may request deletion of your data at any time.
        </p>
      </div>
    </section>
  );
}
