// components/Logo.tsx

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  href?: string;
  size?: number;
}

export default function Logo({ href = "/", size = 40 }: LogoProps) {
  return (
    <Link href={href} className="flex items-center gap-2">
      <Image
        src="/logo.png" // make sure your logo is inside /public/logo.png
        alt="Jumuika Hub KE Logo"
        width={size}
        height={size}
        className="rounded-lg"
        priority
      />
      <span className="font-bold text-xl tracking-tight text-gray-900">Jumuika Hub KE</span>
    </Link>
  );
}
