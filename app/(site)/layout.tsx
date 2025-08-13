// app/(site)/layout.tsx
import Navbar from "@/components/Navbar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      {/* Hero gradient that now extends down to the footer */}
      <div className="relative isolate">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(16,185,129,0.15),rgba(20,83,45,0.10),transparent)]"
          aria-hidden="true"
        />
        {/* content */}
        {children}
      </div>

      <footer className="border-t bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-slate-600">
          <nav className="mb-2 space-x-4">
            <a href="/blog" className="hover:underline">Blog</a>
            <span>•</span>
            <a href="/terms" className="hover:underline">Terms &amp; Conditions</a>
            <span>•</span>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
          </nav>
          <p>© 2025 Jumuika Hub KE. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
