"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    setBaseUrl(process.env.NEXT_PUBLIC_APP_URL || "");
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/institutions", label: "For Colleges & Schools" },
    { href: "/internlink", label: "InternLink" },
    { href: `${baseUrl}/blog`, label: "Blog" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600">
          Jumuika Hub KE
        </Link>
        <div className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href ? "text-green-600 font-semibold" : "text-gray-700"
              } hover:text-green-500 transition`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
