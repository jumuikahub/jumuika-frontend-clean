import Link from "next/link";

export default function Footer() {
<<<<<<< Updated upstream
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* Top row: policy/secondary links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-600">
          <Link href="/blog" className="hover:text-emerald-700">
            Blog
          </Link>
          <span className="text-slate-400">•</span>
          <Link href="/terms" className="hover:text-emerald-700">
            Terms &amp; Conditions
          </Link>
          <span className="text-slate-400">•</span>
          <Link href="/privacy" className="hover:text-emerald-700">
=======
  const buildId = process.env.NEXT_PUBLIC_BUILD_ID ?? "local";

  return (
    <footer className="w-full border-t py-6">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
        <div className="mb-3 flex items-center justify-center gap-4">
          <Link href="/blog" className="hover:text-emerald-600">
            Blog
          </Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-emerald-600">
            Terms &amp; Conditions
          </Link>
          <span>•</span>
          <Link href="/privacy" className="hover:text-emerald-600">
>>>>>>> Stashed changes
            Privacy Policy
          </Link>
        </div>

<<<<<<< Updated upstream
        {/* Bottom row: copyright */}
        <p className="mt-3 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Jumuika Hub KE. All Rights Reserved.
        </p>
=======
        <div className="text-xs">
          © {new Date().getFullYear()} Jumuika Hub KE. All Rights Reserved.
        </div>

        {/* Build marker so we know the deployment is fresh */}
        <div className="mt-2 text-[11px] text-gray-400 select-none">
          Build: <span className="font-mono">{buildId}</span>
        </div>
>>>>>>> Stashed changes
      </div>
    </footer>
  );
}
