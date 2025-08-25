import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Jumuika Hub KE. All rights reserved.</p>

        <div className="space-x-4">
          <Link href="/blog" className="hover:text-green-600">
            Blog
          </Link>
          <Link href="/terms" className="hover:text-green-600">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="hover:text-green-600">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
