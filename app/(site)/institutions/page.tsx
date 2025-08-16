// app/(site)/institutions/page.tsx
import Container from "@/components/Container";

export default function InstitutionsPage() {
  return (
    <section className="py-6 sm:py-8">
      <div className="bg-emerald-50 ring-1 ring-emerald-100/60">
        <Container className="py-10 sm:py-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-emerald-900 sm:text-4xl">
            For Colleges, Universities &amp; TVETs
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
            Jumuika Hub KE supports educational institutions with tools for student onboarding,
            fee payment, bookings, and WhatsApp automation. Improve communication and reduce
            operational friction by meeting students where they already are — WhatsApp.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-emerald-100 bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-base font-semibold text-slate-900">Simple Onboarding</h3>
              <p className="text-sm leading-6 text-slate-700">
                Onboard students and departments quickly with a streamlined process tied to
                verified WhatsApp numbers.
              </p>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-base font-semibold text-slate-900">Bookings &amp; Services</h3>
              <p className="text-sm leading-6 text-slate-700">
                Publish services, schedules, and bookings — manage availability and confirmations
                in real time.
              </p>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-base font-semibold text-slate-900">Messaging &amp; Payments</h3>
              <p className="text-sm leading-6 text-slate-700">
                Enable official updates and fee workflows through WhatsApp-based messaging,
                reducing friction for students and admins.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
