// app/(site)/how-it-works/page.tsx
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function HowItWorksPage() {
  return (
    <main className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">How It Works</h1>
      <p className="text-gray-700 mb-6">
        Jumuika Hub KE simplifies business operations by linking vendors, institutions, 
        and buyers through WhatsApp for bookings, payments, and engagement.
      </p>
      <PrimaryButton>Start Now</PrimaryButton>
    </main>
  );
}
