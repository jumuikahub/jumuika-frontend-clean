import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="w-full border-t mt-12 py-8 px-6 bg-gray-50">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Jumuika Hub KE</p>
        <div className="flex items-center gap-6">
          <Link href="/blog">Blog</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Button variant="primary" asChild>
            <Link href="https://wa.me/254104250912">Join Now</Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
