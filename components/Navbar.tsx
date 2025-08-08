'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/institutions', label: 'For Colleges & Schools' },
    { href: '/internlink', label: 'InternLink' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <header className="w-full border-b shadow-sm bg-white dark:bg-black">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-bold text-black dark:text-white hover:opacity-90">
          Jumuika Hub KE
        </Link>

        <ul className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  pathname === item.href ? 'text-black dark:text-white underline underline-offset-4' : '',
                  'hover:text-black dark:hover:text-white transition-colors'
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
