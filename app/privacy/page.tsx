import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Jumuika Hub KE",
  description:
    "Understand how Jumuika Hub KE handles your data, communication, and WhatsApp interactions in compliance with regulations.",
};

export default function PrivacyPage() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p className="text-gray-600">
        We value your privacy. Jumuika Hub KE only collects essential contact
        and payment data for automation and onboarding purposes. No user chats
        or vendor data are shared or sold.
      </p>
    </main>
  );
}
