import SEO from "@/components/site/SEO";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Jumuika Hub KE"
        description="Learn about Jumuika Hub KE, Kenya's WhatsApp-first SaaS business toolkit for vendors, buyers, and institutions."
        keywords="About Jumuika Hub KE, WhatsApp SaaS Kenya, vendor buyer toolkit"
      />
      <main className="p-6">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">
          Jumuika Hub KE is a WhatsApp-first smart business toolkit designed to
          help vendors, buyers, and institutions manage bookings, payments, and
          rewards — all without a standalone app.
        </p>
      </main>
    </>
  );
}
