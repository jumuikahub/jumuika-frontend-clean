export const metadata = {
  title: "About • Jumuika Hub KE",
  description:
    "Jumuika Hub KE is a WhatsApp-first smart business toolkit for vendors, institutions, and students.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          About Jumuika Hub KE
        </h1>
        <p className="mt-3 text-slate-700">
          We help vendors, institutions, and students connect and transact
          seamlessly on WhatsApp. Our mission is to enable real-time
          commerce — no apps, no friction.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Simple</h3>
          <p className="mt-2 text-sm text-slate-600">
            Built for WhatsApp first, so anyone can use it instantly.
          </p>
        </div>
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Reliable</h3>
          <p className="mt-2 text-sm text-slate-600">
            Real-time interactions that keep your operations moving.
          </p>
        </div>
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Inclusive</h3>
          <p className="mt-2 text-sm text-slate-600">
            Designed for vendors, institutions, and students across Kenya.
          </p>
        </div>
      </div>
    </section>
  );
}
