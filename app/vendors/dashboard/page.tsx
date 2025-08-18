// app/vendors/dashboard/page.tsx
import Container from "@/components/layout/Container";

export const metadata = {
  title: "Vendor Dashboard | Jumuika Hub KE",
};

export default function VendorDashboardPage() {
  return (
    <section className="w-full bg-white">
      <Container>
        <div className="mx-auto max-w-4xl py-16 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Vendor Dashboard</h1>
          <p className="mt-3 text-slate-600">
            Your lightweight dashboard will live here. Listings, orders and
            messaging — connected to WhatsApp.
          </p>
        </div>
      </Container>
    </section>
  );
}
