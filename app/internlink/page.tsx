// app/internlink/page.tsx
import { metadata } from "./metadata";
export { metadata };

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InternLinkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">InternLink Registration</h1>
        <p className="text-muted-foreground mb-6">
          Secure onboarding and weekly reporting for students under internship
          programs.
        </p>
        <Card className="shadow-xl border border-border">
          <CardContent className="p-6 space-y-4">
            <p className="text-base text-left">
              Kindly use the button below to complete your internship
              onboarding. After onboarding, you'll submit weekly reports
              directly to your assigned supervisor.
            </p>
            <div className="text-center">
              <Button asChild>
                <a
                  href="https://wa.me/254104250912?text=Hello%2C%20I%20would%20like%20to%20register%20as%20an%20intern%20via%20Jumuika%20Hub%20KE."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Registration via WhatsApp
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
