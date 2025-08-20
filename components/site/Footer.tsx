// components/site/Footer.tsx
import Link from "next/link";
import constants from "@/lib/constants";

const { BRAND_NAME, TAGLINE, FOOTER_LINKS } = constants;

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-2 text-base font-semibold">{BRAND_NAME}</div>
            <p className="max-w-sm text-sm text-neutral-600">{TAGLINE}</p>
          </div>

          <div>
            <div className="mb-2 text-sm font-semibold">Company</div>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-neutral-700 hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-2 text-sm font-semibold">Legal</div>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-neutral-700 hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8" />
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
