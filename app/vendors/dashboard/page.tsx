// app/vendors/dashboard/page.tsx
export const metadata = {
  title: "Vendor Dashboard • Jumuika Hub KE",
};

export default function VendorDashboard() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Vendor Dashboard
      </h1>
      <p className="mx-auto mt-3 max-w-2xl text-zinc-700">
        Your lightweight dashboard will live here. Listings, orders and
        messaging — connected to WhatsApp.
      </p>
    </div>
  );
}
