import { BRAND } from "@/lib/constants";

export default function WhatsAppCTA({ className = "", ...props }) {
  return (
    <div className={`p-6 bg-green-50 rounded-lg text-center ${className}`} {...props}>
      <h2 className="text-xl font-semibold mb-2">Chat with {BRAND} on WhatsApp</h2>
      <a
        href="https://wa.me/254104250912"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
      >
        Open WhatsApp
      </a>
    </div>
  );
}
