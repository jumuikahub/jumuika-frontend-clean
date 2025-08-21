import constants from "@/lib/constants";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

export const metadata = {
  title: `How it works • ${constants.BRAND}`,
  description: constants.TAGLINE,
};

export default function HowItWorksPage() {
  return (
    <section className="section-y">
      <div className="content-wrap">
        <div className="hero-panel p-10 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-semibold text-center">
            How {constants.BRAND} Works
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-zinc-700">
            {constants.TAGLINE}
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="font-semibold">1. Onboard</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Register and connect your WhatsApp number.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="font-semibold">2. List &amp; Manage</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Add products, services, or bookings and manage in real-time.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="font-semibold">3. Connect &amp; Sell</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Customers contact you instantly on WhatsApp.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppCTA label="Book Services via WhatsApp" variant="primary" />
            <WhatsAppCTA
              label="Buy Items via WhatsApp"
              variant="outline"
              href={constants.WHATSAPP_BUY_URL}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
