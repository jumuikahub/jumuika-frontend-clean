// app/(site)/privacy/page.tsx
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: `Privacy Policy - ${BRAND}`,
};

export default function PrivacyPage() {
  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p>At {BRAND}, your privacy matters. This page explains how we protect your data.</p>
    </section>
  );
}
