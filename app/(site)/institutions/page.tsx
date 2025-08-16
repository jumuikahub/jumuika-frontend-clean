// app/(site)/institutions/page.tsx
export default function InstitutionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
      <section className="rounded-3xl bg-emerald-50 ring-1 ring-emerald-100/80 px-5 sm:px-8 md:px-10 py-8 md:py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-900">
          For Colleges, Universities &amp; TVETs
        </h1>

        <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
          Jumuika Hub KE supports educational institutions with tools for student onboarding,
          fee payment, bookings, and WhatsApp automation. Improve communication and reduce
          operational friction by meeting students where they already are — WhatsApp.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-white ring-1 ring-emerald-100 p-5">
            <h3 className="font-semibold text-emerald-900">Simple Onboarding</h3>
            <p className="mt-2 text-sm text-slate-700">
              Streamlined processes tied to verified WhatsApp numbers.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-emerald-100 p-5">
            <h3 className="font-semibold text-emerald-900">Bookings &amp; Services</h3>
            <p className="mt-2 text-sm text-slate-700">
              Publish services and manage availability and confirmations in real time.
            </p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-emerald-100 p-5">
            <h3 className="font-semibold text-emerald-900">Messaging &amp; Payments</h3>
            <p className="mt-2 text-sm text-slate-700">
              Reduce friction via official WhatsApp-based updates and fee workflows.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
