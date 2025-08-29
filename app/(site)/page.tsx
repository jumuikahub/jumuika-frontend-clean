// app/(site)/page.tsx
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Welcome to Jumuika Hub KE 🚀
      </h1>

      {/* Test usage of PrimaryButton */}
      <PrimaryButton
        label="Get Started"
        href="/about"
        icon
        className="mt-4"
      />
    </main>
  );
}
