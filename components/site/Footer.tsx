// components/site/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-semibold">Jumuika Hub KE</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              WhatsApp-first smart business toolkit for vendors, institutions,
              and students.
            </p>
          </div>

          <div>
            <h4 className="font-medium">Company</h4>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">About</Link></li>
              <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link href="/how-it-works" className="hover:text-foreground">How it works</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium">Legal</h4>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-foreground">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Jumuika Hub KE. All rights reserved.</p>
            <p>Built for WhatsApp-first commerce in Kenya.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
