import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-600">
          <Link href="/blog" className="hover:text-emerald-700">Blog</Link>
          <span className="text-slate-300">•</span>
          <Link href="/terms" className="hover:text-emerald-700">Terms & Conditions</Link>
          <span className="text-slate-300">•</span>
          <Link href="/privacy" className="hover:text-emerald-700">Privacy Policy</Link>
        </nav>

        <p className="mt-3 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Jumuika Hub KE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
