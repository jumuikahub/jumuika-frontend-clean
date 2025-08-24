import PrimaryCTAs from "@/components/ui/PrimaryCTAs";

export default function PrivacyPage() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-lg mb-6">
          At Jumuika Hub KE, your privacy is our priority. We are committed to
          protecting your personal information and ensuring compliance with
          Meta’s latest guidelines and Kenya’s Data Protection laws.
        </p>
        <p className="text-lg mb-6">
          We only collect the minimum data required to provide services such as
          bookings, M-PESA payments, and WhatsApp notifications. We never sell
          your information to third parties.
        </p>
        <PrimaryCTAs />
      </div>
    </main>
  );
}
