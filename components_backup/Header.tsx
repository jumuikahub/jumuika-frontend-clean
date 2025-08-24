// components/Header.tsx
import Link from "next/link";
import Logo from "./Logo";

const nav = [
  { href: "/about", label: "About" },
  { href: "/institutions", label: "Institutions" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/internlink", label: "InternLink" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b">
      <div className="mx-auto flex items-center justify-between w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-14">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="sr-only">Jumuika Hub KE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-slate-700 hover:text-slate-900 transition"
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
