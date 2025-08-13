// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:py-8 text-sm text-slate-600">
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <Link href="/blog" className="hover:text-slate-900">Blog</Link>
        <span aria-hidden>•</span>
        <Link href="/terms" className="hover:text-slate-900">Terms & Conditions</Link>
        <span aria-hidden>•</span>
        <Link href="/privacy" className="hover:text-slate-900">Privacy Policy</Link>
      </div>

      <p className="mt-4 text-center text-xs text-slate-500">
        © 2025 Jumuika Hub KE. All Rights Reserved.
      </p>
    </div>
  );
}
