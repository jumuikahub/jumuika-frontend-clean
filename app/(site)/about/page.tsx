import PrimaryCTAs from "@/components/PrimaryCTAs";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6">About Jumuika Hub KE</h1>
        <p className="text-lg mb-6">
          Jumuika Hub KE is a WhatsApp-First SaaS Business Toolkit that helps
          vendors, institutions, and individuals manage bookings, payments,
          referrals, and communications — all without the need for a mobile app.
        </p>
        <p className="text-lg mb-6">
          We focus on providing smart, secure, and Meta-compliant solutions
          tailored for the Kenyan market, integrating M-PESA and WhatsApp APIs
          to ensure frictionless commerce and automation.
        </p>
        <PrimaryCTAs />
      </div>
    </main>
  );
}
