"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { ComponentProps } from "react";

interface PrimaryButtonProps extends ComponentProps<typeof Button> {
  isLoading?: boolean;
}

export default function PrimaryButton({
  className,
  children,
  isLoading,
  disabled,
  ...props
}: PrimaryButtonProps) {
  return (
    <Button
      className={cn(
        // 🔵 Apply Jumuika brand theme color (update hex if you finalize brand palette)
        "bg-[#0F9D58] hover:bg-[#0c7a45] text-white font-semibold rounded-xl px-6 py-3 transition-all duration-200 shadow-md hover:shadow-lg",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}
