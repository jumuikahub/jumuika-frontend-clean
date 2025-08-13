// app/(site)/layout.tsx
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Top radial emerald wash that fades down (reaches near the footer) */}
        <div
          aria-hidden
          className="
            pointer-events-none absolute inset-x-0 -top-24
            h-[560px]
            bg-[radial-gradient(1200px_560px_at_50%_-200px,theme(colors.emerald.200),transparent)]
            [mask-image:linear-gradient(to_bottom,black,transparent)]
          "
        />
        <div className="relative">{children}</div>
      </main>
      <Footer />
    </>
  );
}
