import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Logo / Branding */}
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg tracking-tight text-green-600">Jumuika</span>
            <span className="text-sm text-gray-500">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          {/* Footer Nav */}
          <nav className="flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-green-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-green-600">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-green-600">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
