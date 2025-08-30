// app/(site)/page.tsx
import { PrimaryButton } from "@/components";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Welcome to Jumuika Hub KE</h1>
      <p className="mt-2 text-gray-600">
        WhatsApp-First SaaS Business Toolkit
      </p>

      {/* Test usage of PrimaryButton */}
      <PrimaryButton href="/about" icon className="mt-4">
        Get Started
      </PrimaryButton>
    </main>
  );
}
