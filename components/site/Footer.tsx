import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand blurb */}
          <div>
            <h3 className="text-base font-semibold text-emerald-900">
              Jumuika Hub KE
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-700">
              WhatsApp-first toolkit to help vendors and students connect,
              sell, and grow — in real time.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-emerald-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/blog"
                  className="text-zinc-700 hover:text-emerald-900"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-emerald-900">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-zinc-700 hover:text-emerald-900"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-zinc-700 hover:text-emerald-900"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-zinc-100 pt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} Jumuika Hub KE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
