// app/(site)/about/page.tsx
import Container from "@/components/layout/Container";

export const metadata = {
  title: "About | Jumuika Hub KE",
  description:
    "We help vendors, institutions, and students transact seamlessly on WhatsApp. Real-time commerce — no apps, no friction.",
};

const FEATURES = [
  {
    title: "Simple",
    body:
      "Built for WhatsApp first, so anyone can use it instantly without learning a new app.",
  },
  {
    title: "Reliable",
    body:
      "Real-time interactions that keep your operations moving and customers informed.",
  },
  {
    title: "Inclusive",
    body:
      "Designed for vendors, institutions, and students across Kenya.",
  },
];

export default function AboutPage() {
  return (
    <section className="w-full bg-white">
      <Container>
        <div className="mx-auto max-w-4xl py-14 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            About Jumuika Hub KE
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            We help vendors, institutions, and students connect and
            transact seamlessly on WhatsApp. Our mission is to enable
            real-time commerce — no apps, no friction.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 pb-16 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
