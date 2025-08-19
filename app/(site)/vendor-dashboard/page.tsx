// app/(site)/vendor-dashboard/page.tsx
import metadata from "./metadata";

export { metadata };

export default function VendorDashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900 sm:text-5xl">
          Vendor Dashboard
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-lg text-zinc-700">
          Your lightweight dashboard will live here. Listings, orders and
          messaging — all connected to WhatsApp.
        </p>
      </section>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
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
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-emerald-200 bg-white p-6"
          >
            <h3 className="text-lg font-semibold text-emerald-900">{c.title}</h3>
            <p className="mt-2 text-zinc-700">{c.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
