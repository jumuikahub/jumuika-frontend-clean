// app/(site)/how-it-works/page.tsx
import { PrimaryButton } from "@/components";

export default function HowItWorksPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">How It Works</h1>
      <p className="mt-2 text-gray-600">
        Discover how Jumuika Hub KE makes business simple.
      </p>

      <PrimaryButton href="/blog" icon className="mt-4">
        Visit Blog
      </PrimaryButton>
    </main>
  );
}
