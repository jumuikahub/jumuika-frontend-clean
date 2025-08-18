// app/vendors/page.tsx
import Container from "@/components/layout/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

export const metadata = {
  title: "Vendors | Jumuika Hub KE",
  description:
    "A lightweight dashboard for vendors to list products/services and chat with customers on WhatsApp — in real time.",
};

const CARDS = [
  {
    title: "List Products & Services",
    body: "Create and update listings on the fly.",
  },
  {
    title: "Orders in Real-time",
    body: "Track bookings and purchases instantly.",
  },
  {
    title: "Smart Messaging",
    body: "Confirm, remind, and follow-up on WhatsApp.",
  },
];

export default function VendorsPage() {
  return (
    <section className="w-full bg-white">
      <Container>
        <div className="mx-auto max-w-4xl py-14 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Jumuika for Vendors
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Manage listings, orders, and messaging — while customers
            interact on WhatsApp. Real-time, no apps needed.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton href="/vendors/dashboard" label="Open Vendor Dashboard" />
            <PrimaryButton label="Request Access via WhatsApp" intent="outline" />
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 pb-16 sm:grid-cols-3">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-slate-600">{c.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
