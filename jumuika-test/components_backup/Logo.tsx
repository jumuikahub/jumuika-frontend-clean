"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Logo() {
  const [broken, setBroken] = useState(false);

  // If you renamed the asset, update the src below:
  const src = "/logo.svg";

  return (
    <Link href="/" className="flex items-center gap-2">
      {!broken ? (
        <Image
          src={src}
          alt="Jumuika Hub KE"
          width={28}
          height={28}
          priority
          className="block"
          onError={() => setBroken(true)}
        />
      ) : (
        <div className="h-7 w-7 rounded-full bg-emerald-700" />
      )}
      <span className="font-medium text-slate-900">Jumuika Hub KE</span>
    </Link>
  );
}
