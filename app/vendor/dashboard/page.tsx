import constants from "@/lib/constants";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

export const metadata = {
  title: `Vendor Dashboard • ${constants.BRAND}`,
  description:
    "Your lightweight dashboard — listings, orders, and messaging — connected to WhatsApp.",
};

export default function VendorDashboardPage() {
  return (
    <section className="section-y">
      <div className="content-wrap">
        <h1 className="text-4xl sm:text-5xl font-semibold text-center">
          Vendor Dashboard
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-700">
          Your lightweight dashboard will live here — listings, orders, and
          messaging — connected to WhatsApp.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppCTA label="Open WhatsApp" variant="primary" />
        </div>
      </div>
    </section>
  );
}
