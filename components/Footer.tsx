// components/Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t mt-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>© 2025 Jumuika Hub KE. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link href="/blog" className="hover:text-primary transition">
            Blog
          </Link>
          <Link href="/terms" className="hover:text-primary transition">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="hover:text-primary transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
