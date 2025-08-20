// components/site/Footer.tsx
import Link from "next/link";
import constants from "@/lib/constants";
const { BRAND, TAGLINE } = constants;

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white text-sm font-semibold">
                J
              </span>
              <span className="font-medium">Jumuika Hub KE</span>
            </div>
            <p className="mt-3 text-sm text-zinc-600">{TAGLINE}</p>
          </div>

          <nav>
            <h4 className="text-sm font-semibold text-zinc-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-zinc-900 text-zinc-600">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          <nav>
            <h4 className="text-sm font-semibold text-zinc-900">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-zinc-900 text-zinc-600">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-zinc-900 text-zinc-600">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} Jumuika Hub KE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
