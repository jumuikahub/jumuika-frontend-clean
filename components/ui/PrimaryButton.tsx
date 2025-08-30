import React from "react";
import Link from "next/link";
import { Button } from "@/components"; // unified barrel import

export interface PrimaryButtonProps {
  text: string;
  href?: string;
  icon?: boolean;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  href,
  icon = false,
  className = "",
}) => {
  const button = (
    <Button className={`px-6 py-3 text-lg font-semibold ${className}`}>
      {text}
      {icon && <span className="ml-2">👉</span>}
    </Button>
  );

  if (href) {
    return (
      <Link href={href} passHref>
        {button}
      </Link>
    );
  }

  return button;
};

export default PrimaryButton;
