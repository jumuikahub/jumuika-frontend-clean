// app/internlink/page.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "InternLink – Intern Registration & Weekly Reports | Jumuika Hub KE",
  description:
    "Register as a student intern and submit weekly performance reports directly to your assigned supervisor via Jumuika's secure InternLink module.",
  openGraph: {
    title: "InternLink – Jumuika Hub KE",
    description:
      "Secure student onboarding and weekly report submissions via WhatsApp and web dashboard.",
    url: "https://jumuikahub.com/internlink",
    type: "website",
  },
};

export default function InternLinkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">InternLink Registration</h1>
        <p className="text-muted-foreground mb-6">
          Secure onboarding and weekly reporting for students under internship programs.
        </p>

        <Card className="shadow-sm border border-border">
          <CardContent className="p-6 space-y-5">
            <p className="text-base">
              Use the button below to complete onboarding. After onboarding, submit weekly
              reports to your assigned supervisor.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a
                  href="https://wa.me/254104250912?text=Hello%2C%20I%20would%20like%20to%20register%20as%20an%20intern%20via%20Jumuika%20Hub%20KE."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Registration via WhatsApp
                </a>
              </Button>

              <Button asChild className="bg-secondary text-secondary-foreground">
                <a href="/manager" aria-label="Supervisor dashboard link">
                  Supervisor Dashboard
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
