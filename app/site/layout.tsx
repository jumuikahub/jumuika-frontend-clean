// app/site/layout.tsx
import Navbar from "@/components/Navbar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* subtle emerald wash */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(16,185,129,0.06)_0%,rgba(16,185,129,0.0)_35%)]" />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-slate-600">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="/blog" className="hover:text-emerald-700">Blog</a>
            <span>•</span>
            <a href="/terms" className="hover:text-emerald-700">Terms &amp; Conditions</a>
            <span>•</span>
            <a href="/privacy" className="hover:text-emerald-700">Privacy Policy</a>
          </div>
          <p className="mt-3">© {new Date().getFullYear()} Jumuika Hub KE. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
