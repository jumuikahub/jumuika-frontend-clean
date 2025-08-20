// components/site/Footer.tsx
import Link from "next/link";
import constants from "@/lib/constants";

export default function Footer() {
  const { BRAND, TAGLINE } = constants;

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white text-xs font-bold">
              J
            </span>
            <span className="font-medium text-zinc-900">{BRAND}</span>
          </div>
          <p className="footer-text mt-3">{TAGLINE}</p>
        </div>

        <div>
          <h4 className="footer-heading">Company</h4>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/blog" className="footer-text hover:text-zinc-900">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Legal</h4>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/privacy" className="footer-text hover:text-zinc-900">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="footer-text hover:text-zinc-900">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
