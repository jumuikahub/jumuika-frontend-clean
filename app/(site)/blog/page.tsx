// app/(site)/blog/page.tsx
import { PrimaryButton } from "@/components";

export default function BlogPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Our Blog</h1>
      <p className="mt-2 text-gray-600">
        Insights, updates, and news from Jumuika Hub KE.
      </p>

      <PrimaryButton href="/about" icon className="mt-4">
        Back to About
      </PrimaryButton>
    </main>
  );
}
