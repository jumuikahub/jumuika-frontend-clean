import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Brand */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-brand dark:text-brand-light">
              Jumuika Hub KE
            </span>
            . All rights reserved.
          </p>

          {/* Right: Links */}
          <nav className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-light transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-light transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-light transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
