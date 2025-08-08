import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institutions | Jumuika Hub KE",
  description:
    "Smart bookings and student engagement for colleges, TVETs, and universities. Manage onboarding, payments, and communication easily.",
};

export default function InstitutionsPage() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-3xl font-semibold mb-4">Institutions Onboarding</h1>
      <p className="text-gray-600">
        Welcome to Jumuika for Colleges, Universities, and TVETs.
      </p>
    </main>
  );
}
