// app/psc/page.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "PSC Admin – Send Broadcasts to Interns | Jumuika Hub KE",
  description:
    "Authorized Public Service Commission (PSC) admins can broadcast key messages to interns directly via Jumuika’s smart InternLink portal.",
  openGraph: {
    title: "PSC Admin Panel – Jumuika Hub KE",
    description:
      "Secure messaging portal for PSC admins to reach registered interns.",
    url: "https://jumuikahub.com/psc",
    type: "website",
  },
};

export default function PscPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">PSC Admin Broadcast</h1>
        <p className="text-muted-foreground mb-6">
          Only authorized PSC staff can send broadcasts to Jumuika-registered interns.
        </p>

        <Card className="shadow-sm border border-border">
          <CardContent className="p-6 space-y-4">
            <p>
              This portal allows authorized Public Service Commission (PSC) administrators
              to send official updates to interns registered on the platform.
            </p>
            <p className="text-sm text-muted-foreground">
              Authentication and broadcast endpoints will be enabled in the next phase.
            </p>
            <Button disabled>Send Broadcast (Coming Soon)</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
