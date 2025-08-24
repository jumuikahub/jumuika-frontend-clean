// components/ui/WhatsAppCTA.tsx
import { BRAND } from "@/lib/constants";

export default function WhatsAppCTA() {
  return (
    <div className="p-6 bg-green-50 rounded-lg text-center">
      <h2 className="text-xl font-semibold mb-2">Chat with {BRAND} on WhatsApp</h2>
      <a
        href="https://wa.me/254700000000"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
      >
        Start Chat
      </a>
    </div>
  );
}
