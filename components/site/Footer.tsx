// components/site/Footer.tsx
import Link from "next/link";
import { BRAND, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-block h-6 w-6 rounded-full bg-emerald-600" />
              <span className="font-semibold text-zinc-900">{BRAND.name}</span>
            </div>
            <p className="text-sm text-zinc-600">
              WhatsApp-first smart business toolkit for vendors and students.
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-zinc-900">Company</h4>
            <ul className="space-y-1">
              {FOOTER_LINKS.company.map((l) => (
                <li key={l.href}>
                  <Link className="text-sm text-zinc-600 hover:text-zinc-900" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-zinc-900">Legal</h4>
            <ul className="space-y-1">
              {FOOTER_LINKS.legal.map((l) => (
                <li key={l.href}>
                  <Link className="text-sm text-zinc-600 hover:text-zinc-900" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-xs text-zinc-500">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
