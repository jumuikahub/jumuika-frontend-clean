// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-600">
          <Link href="/blog" className="hover:text-emerald-700">
            Blog
          </Link>
          <span aria-hidden>•</span>
          <Link href="/terms" className="hover:text-emerald-700">
            Terms &amp; Conditions
          </Link>
          <span aria-hidden>•</span>
          <Link href="/privacy" className="hover:text-emerald-700">
            Privacy Policy
          </Link>
        </div>

        {/* Copyright */}
        <p className="mt-3 text-center text-xs text-slate-500">
          © 2025 Jumuika Hub KE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
