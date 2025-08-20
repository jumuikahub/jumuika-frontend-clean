// app/(site)/layout.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { BRAND_NAME, WHATSAPP_CTA_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: BRAND_NAME,
    template: `%s • ${BRAND_NAME}`,
  },
};

const navLink =
  "text-sm font-medium text-zinc-700 hover:text-brand-dark transition-colors";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="font-heading text-lg text-brand-dark">
            {BRAND_NAME}
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/about" className={navLink}>
              About
            </Link>
            <Link href="/how-it-works" className={navLink}>
              How it works
            </Link>
            <Link
              href="/vendor-dashboard"
              className="inline-flex items-center justify-center rounded-xl border border-brand/40 bg-white px-4 py-2 text-sm font-medium text-brand hover:bg-brand/10 transition-colors"
            >
              Vendor Dashboard
            </Link>
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main>{children}</main>

      {/* Footer (appears once across all pages) */}
      <footer className="mt-16 border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="font-heading text-zinc-900">{BRAND_NAME}</h4>
              <p className="mt-2 text-sm text-zinc-600">
                WhatsApp-first smart business toolkit for vendors and students.
              </p>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-zinc-900">Company</h5>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-zinc-700 hover:text-brand-dark">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-zinc-900">Legal</h5>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-zinc-700 hover:text-brand-dark">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-zinc-700 hover:text-brand-dark">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
