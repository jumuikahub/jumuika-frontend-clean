import Link from 'next/link';
import { Button } from '@/components/ui';

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="rounded-3xl bg-emerald-50 p-8 sm:p-12">
        <h1 className="text-4xl font-extrabold leading-tight text-emerald-900 sm:text-5xl">
          Welcome to Jumuika Hub KE
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-emerald-900/80">
          Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects vendors,
          institutions, and students seamlessly. Real-time commerce. No apps needed.
        </p>

        <div className="mt-8 flex flex-col items-center justify-start gap-3 sm:flex-row">
          {/* WhatsApp CTA — must render as anchor when using href */}
          <Button
            as="a"
            href="https://wa.me/254104250912"
            target="_blank"
            rel="noopener"
            variant="primary"
          >
            Book Services via WhatsApp
          </Button>

          {/* Internal route CTA — also use anchor variant for consistency */}
          <Button as="a" href="/internlink" variant="primary">
            InternLink
          </Button>
        </div>
      </section>

      <footer className="mt-16 text-center text-sm text-emerald-900/70">
        <nav className="mb-3 flex items-center justify-center gap-6">
          <Link href="/blog">Blog</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </nav>
        <p>© 2025 Jumuika Hub KE. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
