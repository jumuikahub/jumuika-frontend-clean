import constants from "@/lib/constants";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

export const metadata = {
  title: `Welcome • ${constants.BRAND}`,
  description: constants.TAGLINE,
};

export default function HomePage() {
  return (
    <section className="section-y">
      <div className="content-wrap">
        <div className="hero-panel p-10 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-semibold text-center">
            Welcome to {constants.BRAND}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-zinc-700">
            {constants.TAGLINE}
          </p>

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
