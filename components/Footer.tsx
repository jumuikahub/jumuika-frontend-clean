import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* Top row: policy/secondary links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-600">
          <Link href="/blog" className="hover:text-emerald-700">
            Blog
          </Link>
          <span className="text-slate-400">•</span>
          <Link href="/terms" className="hover:text-emerald-700">
            Terms &amp; Conditions
          </Link>
          <span className="text-slate-400">•</span>
          <Link href="/privacy" className="hover:text-emerald-700">
            Privacy Policy
          </Link>
        </div>

        {/* Bottom row: copyright */}
        <p className="mt-3 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Jumuika Hub KE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
