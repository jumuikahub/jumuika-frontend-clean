export default function Footer() {
  return (
    <footer className="border-t bg-white/60 backdrop-blur-sm py-6 text-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-zinc-600">
          <a href="/blog" className="hover:text-zinc-800">Blog</a>
          <span className="select-none">•</span>
          <a href="/terms" className="hover:text-zinc-800">Terms &amp; Conditions</a>
          <span className="select-none">•</span>
          <a href="/privacy" className="hover:text-zinc-800">Privacy Policy</a>
        </div>
        <p className="mt-3 text-center text-zinc-500">
          © 2025 Jumuika Hub KE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
