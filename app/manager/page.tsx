// app/manager/page.tsx
import { metadata } from "./metadata";
export { metadata };

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function ManagerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Supervisor Dashboard</h1>
        <p className="text-muted-foreground mb-6">
          Access intern submissions securely. You must be authorized to view
          assigned reports.
        </p>
        <Card className="shadow-lg border border-border">
          <CardContent className="p-6 space-y-3 text-left">
            <p className="text-base">
              This section is reserved for institutional supervisors only. Each
              supervisor can only access reports submitted by interns linked to
              their institution.
            </p>
            <p className="text-sm text-muted-foreground">
              Future updates will include login authentication and report
              filtering.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
