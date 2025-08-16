// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-slate-600">
          <nav className="flex gap-6">
            <Link href="/blog" className="hover:text-slate-900">Blog</Link>
            <Link href="/terms" className="hover:text-slate-900">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-slate-900">Privacy Policy</Link>
          </nav>
          <p className="text-slate-500">
            © {year} Jumuika Hub KE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
