// components/site/Navbar.tsx
import { BRAND, TAGLINE } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-white shadow">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-bold">{BRAND}</span>
        <span className="text-sm text-gray-600">{TAGLINE}</span>
      </div>
    </nav>
  );
}
