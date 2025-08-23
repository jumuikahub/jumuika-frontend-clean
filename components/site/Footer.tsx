"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">Jumuika Hub KE</h2>
          <p className="text-sm">
            WhatsApp-first SaaS toolkit for institutions, vendors, and students.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-green-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/internlink" className="hover:text-green-400 transition">
                InternLink
              </Link>
            </li>
            <li>
              <Link href="/institutions" className="hover:text-green-400 transition">
                For Colleges & Schools
              </Link>
            </li>
            <li>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/blog`}
                className="hover:text-green-400 transition"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-green-400 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-green-400 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <p>Email: support@jumuikahub.co.ke</p>
          <p>WhatsApp: +254700915610</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Jumuika Hub KE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
