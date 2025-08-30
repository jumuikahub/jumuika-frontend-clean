// app/(site)/about/page.tsx
import { PrimaryButton } from "@/components";

export default function AboutPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">About Us</h1>
      <p className="mt-2 text-gray-600">
        Learn more about Jumuika Hub KE and our mission.
      </p>

      <PrimaryButton href="/how-it-works" icon className="mt-4">
        How It Works
      </PrimaryButton>
    </main>
  );
}
