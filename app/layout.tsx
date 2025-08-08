// app/layout.tsx
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Jumuika Hub KE',
  description: 'WhatsApp-first smart business toolkit for vendors, institutions, and students',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <header className="w-full border-b border-gray-200 dark:border-gray-700">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold hover:opacity-80">Jumuika Hub KE</Link>
            <div className="space-x-4 text-sm font-medium">
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/institutions" className="hover:text-blue-600">For Colleges & Schools</Link>
              <Link href="/internlink" className="hover:text-blue-600">InternLink</Link>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            </div>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-10">{children}</main>
        <footer className="mt-16 text-center text-xs text-gray-500 border-t pt-6">
          <p>© 2025 Jumuika Hub KE. All Rights Reserved.</p>
          <div className="space-x-2 mt-1">
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span>•</span>
            <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
            <span>•</span>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </footer>
      </body>
    </html>
  )
}
