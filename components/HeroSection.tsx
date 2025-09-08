// components/HeroSection.tsx
import PrimaryButton from "./PrimaryButton";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Jumuika Hub KE
        </h1>
        <p className="text-lg md:text-xl mb-8">
          WhatsApp-First SaaS Business Toolkit — Bookings, Payments, Referrals, Rewards, and more.
        </p>
        <PrimaryButton className="px-6 py-3 text-lg">
          Get Started
        </PrimaryButton>
      </div>
    </section>
  );
}
