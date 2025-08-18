// components/site/Footer.tsx
import Link from "next/link";
import { BRAND } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-emerald-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-emerald-900 font-semibold">{BRAND.name}</h3>
          <p className="mt-2 text-sm text-emerald-900/70">
            {BRAND.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-emerald-900">Company</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link href="/blog" className="text-emerald-900/70 hover:text-emerald-900">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-emerald-900">Legal</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link href="/privacy" className="text-emerald-900/70 hover:text-emerald-900">Privacy</Link></li>
            <li><Link href="/terms" className="text-emerald-900/70 hover:text-emerald-900">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-emerald-900/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-emerald-900/60">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
