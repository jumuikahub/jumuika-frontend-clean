// app/(site)/terms/page.tsx
export const metadata = {
  title: "Terms & Conditions • Jumuika Hub KE",
};

export default function TermsPage() {
  return (
    <section className="space-y-6">
      <header className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 text-center">
        <h1 className="text-2xl font-bold">Terms & Conditions</h1>
        <p className="mx-auto mt-2 max-w-3xl text-zinc-700">
          By using Jumuika Hub KE you agree to these terms. Please read them
          carefully.
        </p>
      </header>

      <div className="prose prose-zinc mx-auto max-w-3xl">
        <p>
          Jumuika Hub KE is provided “as is”. You’re responsible for the content
          you share and for complying with WhatsApp’s terms. We may update these
          terms occasionally.
        </p>
      </div>
    </section>
  );
}
