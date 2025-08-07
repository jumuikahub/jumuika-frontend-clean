// components/Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-muted-foreground flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p>© 2025 Jumuika Hub KE. All Rights Reserved.</p>
        <nav className="flex items-center gap-4">
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-primary">Terms &amp; Conditions</Link>
          <span>•</span>
          <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
