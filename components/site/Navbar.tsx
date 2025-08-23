"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/institutions", label: "For Colleges & Schools" },
    { href: "/internlink", label: "InternLink" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-green-600">
        <Link href="/">Jumuika Hub KE</Link>
      </div>
      <div className="space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-green-600 transition ${
              pathname === link.href ? "text-green-600 font-semibold" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
