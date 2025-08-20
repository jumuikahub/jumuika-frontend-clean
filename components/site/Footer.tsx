// components/site/Footer.tsx
import Link from "next/link";
import constants from "@/lib/constants";

export default function Footer() {
  const { BRAND_NAME, TAGLINE, FOOTER_LINKS } = constants;

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <div className="mb-2 text-sm font-semibold">{BRAND_NAME}</div>
          <p className="max-w-md text-sm text-zinc-600">{TAGLINE}</p>
        </div>

        <div>
          <div className="mb-3 text-sm font-semibold">Company</div>
          <ul className="space-y-2 text-sm">
            {FOOTER_LINKS.company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-zinc-600 hover:text-zinc-900">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-3 text-sm font-semibold">Legal</div>
          <ul className="space-y-2 text-sm">
            {FOOTER_LINKS.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-zinc-600 hover:text-zinc-900">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t px-4 py-6 text-xs text-zinc-500">
        © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
