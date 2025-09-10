"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function TestToast() {
  return (
    <div className="flex justify-center py-6">
      <Button
        onClick={() =>
          toast.success("Toast working 🎉", {
            description: "Your new Shadcn + Sonner toast system is live!",
          })
        }
      >
        Show Test Toast
      </Button>
    </div>
  );
}
