import React from "react";
import { BRAND } from "@/lib/constants";
import PrimaryCTAs from "@/components/ui/PrimaryCTAs"; // ✅ default import

export const metadata = {
  title: `${BRAND} – How It Works`,
};

export default function HowItWorksPage() {
  return (
    <main>
      <h1>How {BRAND} Works</h1>
      <PrimaryCTAs /> {/* ✅ use component directly */}
    </main>
  );
}
