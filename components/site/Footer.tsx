// components/site/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <h3 className="font-semibold text-slate-900">Jumuika Hub KE</h3>
          <p className="mt-2 text-sm text-slate-600">
            WhatsApp-first smart business toolkit for vendors, institutions, and
            students.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Company</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Legal</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Jumuika Hub KE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
