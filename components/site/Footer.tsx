import Link from "next/link";
import constants from "@/lib/constants";

const { BRAND, TAGLINE } = constants;

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-3">
          {/* Brand */}
          <div className="flex items-start gap-3">
            <div className="h-8 w-8 rounded-full bg-brand-600/90 ring-1 ring-brand-700/20" />
            <div>
              <p className="font-medium text-zinc-900">{BRAND}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{TAGLINE}</p>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-semibold text-zinc-900">Company</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600">
              <li>
                <Link href="/blog" className="hover:text-zinc-900">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold text-zinc-900">Legal</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600">
              <li>
                <Link href="/privacy" className="hover:text-zinc-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-zinc-900">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t py-6">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
