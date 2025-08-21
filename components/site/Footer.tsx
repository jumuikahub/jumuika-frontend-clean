import Link from "next/link";
import constants from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  const { BRAND, TAGLINE } = constants;

  return (
    <footer className="border-t bg-white">
      <div className="content-wrap py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center font-medium">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white text-xs font-semibold">
                J
              </span>
              <span className="ml-2">{BRAND}</span>
            </div>
            <p className="mt-3 text-sm text-zinc-600">{TAGLINE}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm">
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

        <div className="mt-8 pt-6 border-t text-xs text-zinc-500">
          © {year} {BRAND}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
