// components/site/Footer.tsx
import Link from "next/link";
import { BRAND } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 py-10 sm:grid-cols-3">
          <div>
            <div className="text-sm font-semibold">{BRAND.name}</div>
            <p className="mt-2 text-sm text-zinc-600">{BRAND.tagline}</p>
          </div>

          <div>
            <div className="text-sm font-semibold">Company</div>
            <ul className="mt-2 space-y-2 text-sm text-zinc-600">
              <li>
                <Link href="/blog" className="hover:text-zinc-900">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Legal</div>
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

        <div className="border-t border-zinc-100 py-6">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
