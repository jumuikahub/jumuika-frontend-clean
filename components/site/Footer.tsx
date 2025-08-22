// components/site/Footer.tsx
"use client";

import Link from "next/link";
import constants from "@/lib/constants";

const { BRAND, TAGLINE } = constants;

type LinkItem = { label: string; href: string };

function Column({
  title,
  items,
}: {
  title: string;
  items: LinkItem[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand & Tagline */}
          <div className="flex items-start gap-3">
            {/* Simple round mark to the left of the brand name */}
            <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-white text-sm font-semibold">
              J
            </span>
            <div>
              <div className="text-base font-semibold text-gray-900">
                {BRAND}
              </div>
              <p className="mt-2 max-w-md text-sm leading-6 text-gray-600">
                {TAGLINE}
              </p>
            </div>
          </div>

          {/* Company */}
          <Column
            title="Company"
            items={[{ label: "Blog", href: "/blog" }]}
          />

          {/* Legal */}
          <Column
            title="Legal"
            items={[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms & Conditions", href: "/terms" },
            ]}
          />
        </div>

        {/* Divider */}
        <div className="mt-10 border-t" />

        {/* Copyright */}
        <div className="py-6 text-xs text-gray-500">
          © {year} {BRAND}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
