import PrimaryCTAs from "@/components/ui/PrimaryCTAs";

export default function TermsPage() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-lg mb-6">
          By using Jumuika Hub KE, you agree to follow our terms and conditions
          that ensure transparency, compliance, and safe use of our platform.
        </p>
        <p className="text-lg mb-6">
          Our services are built to comply with Meta policies and Kenyan
          financial regulations. By continuing to use our services, you consent
          to fair use and responsible communication via WhatsApp.
        </p>
        <PrimaryCTAs />
      </div>
    </main>
  );
}
