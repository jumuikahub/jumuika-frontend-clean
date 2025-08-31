import React from "react";
import SEO from "@/components/site/SEO";
import { PrimaryButton } from "@/components";; // ✅ fixed path

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms & Conditions – Jumuika Hub KE"
        description="Review Jumuika Hub KE’s terms and conditions of service."
      />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
        <p>
          These Terms & Conditions govern your use of Jumuika Hub KE. By
          accessing our services, you agree to these rules.
        </p>
        <div className="mt-6">
          <PrimaryButton href="/">Click Me</PrimaryButton>
        </div>
      </main>
    </>
  );
}
