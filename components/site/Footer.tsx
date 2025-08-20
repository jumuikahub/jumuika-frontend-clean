// components/site/Footer.tsx
import Link from "next/link";
import constants from "@/lib/constants"; // default import

const { BRAND_NAME, BRAND_TAGLINE, FOOTER_LINKS } = constants;

export default function Footer() {
  return (
    <footer className="section mt-24 border-t border-zinc-200 bg-white">
      <div className="wrap py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="font-semibold">{BRAND_NAME}</div>
            <p className="mt-3 text-sm text-zinc-600">
              {BRAND_TAGLINE.replace(" — real-time, no apps.", ".")}
            </p>
          </div>

          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-sm">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-zinc-600 hover:text-zinc-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-sm">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-zinc-600 hover:text-zinc-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
