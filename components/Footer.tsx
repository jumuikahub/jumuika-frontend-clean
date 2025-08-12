export default function Footer() {
  return (
    <footer className="bg-white border-t border-green-100 text-gray-600 text-sm py-6">
      <div className="container mx-auto flex flex-col items-center space-y-2">
        {/* Links */}
        <div className="flex space-x-6">
          <a href="/blog" className="hover:text-green-700 transition">Blog</a>
          <span>•</span>
          <a href="/terms" className="hover:text-green-700 transition">Terms & Conditions</a>
          <span>•</span>
          <a href="/privacy" className="hover:text-green-700 transition">Privacy Policy</a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2025 Jumuika Hub KE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
