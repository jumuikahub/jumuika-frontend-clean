import SEO from "@/components/site/SEO";
import PrimaryCTA from "@/components/PrimaryCTA"; // ✅ fixed path

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy – Jumuika Hub KE"
        description="Read Jumuika Hub KE’s privacy policy and learn how we protect your data."
      />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p>
          At Jumuika Hub KE, your privacy is our priority. This page outlines how
          we handle data responsibly and securely.
        </p>
        <div className="mt-6">
          <PrimaryCTA />
        </div>
      </main>
    </>
  );
}
