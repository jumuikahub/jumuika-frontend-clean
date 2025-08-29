// app/(site)/about/page.tsx
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">About Jumuika Hub KE</h1>
      <p className="text-gray-700 mb-6">
        Jumuika Hub KE is a WhatsApp-First SaaS Business Toolkit that enables smart bookings, 
        secure payments, referral rewards, and seamless vendor-to-buyer connections.
      </p>
      <PrimaryButton>Learn More</PrimaryButton>
    </main>
  );
}
