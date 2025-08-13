// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Compact padding so the footer never looks “tall” on short pages */}
        <div className="flex flex-col items-center justify-between gap-3 py-5 text-sm text-slate-600 md:flex-row">
          <nav className="flex gap-4">
            <Link href="/blog" className="hover:text-emerald-700">
              Blog
            </Link>
            <span className="hidden text-slate-300 md:inline">•</span>
            <Link href="/terms" className="hover:text-emerald-700">
              Terms &amp; Conditions
            </Link>
            <span className="hidden text-slate-300 md:inline">•</span>
            <Link href="/privacy" className="hover:text-emerald-700">
              Privacy Policy
            </Link>
          </nav>

          <p className="text-center text-slate-500">
            © {new Date().getFullYear()} Jumuika Hub KE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
