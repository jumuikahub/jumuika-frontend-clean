// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-white/50 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 text-sm text-slate-700">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/blog" className="hover:underline">Blog</Link>
          <span>•</span>
          <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
          <span>•</span>
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
        <p className="mt-4 text-center text-slate-500">
          © 2025 Jumuika Hub KE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
