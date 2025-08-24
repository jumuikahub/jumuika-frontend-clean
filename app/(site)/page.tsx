// Trigger redeploy
import React from "react";
import { BRAND } from "@/lib/constants";
import PrimaryCTAs from "@/components/ui/PrimaryCTAs"; // ✅ default import

export const metadata = {
  title: `${BRAND} – Welcome`,
};

export default function Page() {
  return (
    <main>
      <h1>Welcome to {BRAND}</h1>
      <PrimaryCTAs />  {/* ✅ use component directly */}
    </main>
  );
}
