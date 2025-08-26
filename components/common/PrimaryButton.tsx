// components/PrimaryButton.tsx
"use client";

import { Button } from "@/components/ui/button";

export default function PrimaryButton({
  children,
  onClick,
}: {
  children?: React.ReactNode;  // ✅ made optional
  onClick?: () => void;
}) {
  return (
    <Button
      onClick={onClick}
      className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
    >
      {children ?? "Click"} {/* ✅ fallback text */}
    </Button>
  );
}
