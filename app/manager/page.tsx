// app/manager/page.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Supervisor Dashboard – View Intern Reports | Jumuika Hub KE",
  description:
    "Supervisors can securely access and review intern weekly reports assigned to their institution using Jumuika's InternLink dashboard.",
  openGraph: {
    title: "Supervisor Dashboard – Jumuika Hub KE",
    description:
      "Login-protected dashboard for supervisors to view and manage intern submissions.",
    url: "https://jumuikahub.com/manager",
    type: "website",
  },
};

export default function ManagerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Supervisor Dashboard</h1>
        <p className="text-muted-foreground mb-6">
          Access intern submissions securely. Only authorized supervisors can view assigned reports.
        </p>

        <Card className="shadow-sm border border-border">
          <CardContent className="p-6 space-y-4">
            <p>
              This section is reserved for institutional supervisors. Each supervisor can only
              access reports submitted by interns linked to their institution.
            </p>
            <p className="text-sm text-muted-foreground">
              Authentication & report filtering will be enabled next (session-based login).
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
