// app/psc/page.tsx
import { metadata } from "./metadata";
export { metadata };

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PscPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">PSC Admin Broadcast</h1>
        <p className="text-muted-foreground mb-6">
          Only authorized PSC staff can send broadcasts to Jumuika-registered
          interns.
        </p>
        <Card className="shadow-md border border-border">
          <CardContent className="p-6 space-y-4">
            <p className="text-left text-base">
              This portal allows authorized Public Service Commission (PSC)
              administrators to send official updates to interns registered on
              the platform.
            </p>
            <p className="text-sm text-muted-foreground">
              Authentication and message broadcast functionality will be added
              in the next phase.
            </p>
            <div className="text-center">
              <Button disabled>Send Broadcast (Coming Soon)</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
