import React from "react";
import { Button } from "./button";

export function PrimaryButton({
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      className="bg-green-600 hover:bg-green-700 text-white rounded-2xl shadow-lg px-6 py-3"
      {...props}
    >
      {children}
    </Button>
  );
}
