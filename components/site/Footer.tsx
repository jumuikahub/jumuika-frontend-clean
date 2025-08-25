import Link from "next/link";
import { Button } from "@/components/ui/Button"; // ✅ fixed path

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Jumuika Hub KE</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <Link href="/terms" className="hover:text-blue-600">Terms & Conditions</Link>
          <Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
        </div>
        <Button className="mt-4 md:mt-0">Join Now</Button>
      </div>
    </footer>
  );
}
