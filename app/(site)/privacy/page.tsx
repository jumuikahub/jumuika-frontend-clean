import React from "react";
import SEO from "@/components/seo";

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | Jumuika Hub KE"
        description="Read Jumuika Hub KE's privacy policy to learn how we protect your data and ensure compliance with Meta and Kenyan regulations."
      />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          At Jumuika Hub KE, your privacy is important to us. This Privacy Policy
          explains how we collect, use, and protect your information when you
          use our WhatsApp-first smart marketplace and services.
        </p>
        <p className="mb-4">
          We comply fully with Meta regulations and Kenyan data protection laws
          to ensure transparency and security in every transaction.
        </p>
        <p className="mb-4">
          By using our services, you consent to the practices outlined in this
          Privacy Policy.
        </p>
      </main>
    </>
  );
}
