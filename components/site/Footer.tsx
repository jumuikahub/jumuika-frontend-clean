// components/site/Footer.tsx
import Link from "next/link";
import constants from "@/lib/constants";
const { BRAND, TAGLINE } = constants;

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold">{BRAND}</h3>
            <p className="mt-2 max-w-sm text-sm text-zinc-600">{TAGLINE}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-2 space-y-2 text-sm text-zinc-600">
              <li>
                <Link href="/blog" className="hover:text-zinc-900">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm text-zinc-600">
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

        <div className="mt-8 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} {BRAND}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
