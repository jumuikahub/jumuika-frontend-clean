// components/site/Footer.tsx
import Link from "next/link";
import {
  FOOTER_COMPANY,
  FOOTER_LEGAL,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 sm:grid-cols-3">
        <div>
          <h3 className="font-semibold">{SITE_NAME}</h3>
          <p className="mt-2 max-w-sm text-sm text-zinc-600">{SITE_TAGLINE}</p>
        </div>

        <div>
          <h4 className="mb-2 font-semibold">Company</h4>
          <ul className="space-y-2 text-sm">
            {FOOTER_COMPANY.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-emerald-700">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 font-semibold">Legal</h4>
          <ul className="space-y-2 text-sm">
            {FOOTER_LEGAL.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-emerald-700">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
