// app/(site)/about/page.tsx
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
      <section className="rounded-3xl bg-emerald-50 ring-1 ring-emerald-100/80 px-5 sm:px-8 md:px-10 py-8 md:py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-900">
          About Jumuika Hub KE
        </h1>
        <div className="mt-4 max-w-3xl space-y-4 text-slate-700 leading-relaxed">
          <p>
            Jumuika Hub KE is a WhatsApp-first smart business toolkit. We help vendors,
            institutions, and students connect and transact in real time, without extra apps.
            Our mission is to make commerce seamless and accessible through familiar channels.
          </p>
          <p>
            We focus on practical tools: onboarding, listings, bookings, payments, and simple
            workflows that run on WhatsApp. Jumuika is designed for speed, clarity, and trust.
          </p>
        </div>
      </section>
    </div>
  );
}
