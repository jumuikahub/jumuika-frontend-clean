"use client";

import * as React from "react";
import { toast as sonnerToast } from "sonner";

type ToastProps = {
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  duration?: number;
  variant?: "default" | "destructive" | "success" | "warning";
};

export function useToast() {
  const toast = React.useCallback(
    ({ title, description, action, duration = 3000, variant = "default" }: ToastProps) => {
      sonnerToast(title || "Notification", {
        description,
        duration,
        action: action
          ? {
              label: action.label,
              onClick: action.onClick,
            }
          : undefined,
        className:
          variant === "destructive"
            ? "bg-red-600 text-white"
            : variant === "success"
              ? "bg-green-600 text-white"
              : variant === "warning"
                ? "bg-yellow-500 text-black"
                : "bg-gray-900 text-white",
      });
    },
    []
  );

  return { toast };
}
