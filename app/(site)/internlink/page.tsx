import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";

export default function InternLinkPage() {
  // ... your hero, cards, etc.

  return (
    <main className="...">
      {/* ...content… */}

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/internlink/onboard"
          className="h-11 rounded-xl px-5 font-medium bg-emerald-700 text-white hover:bg-emerald-800 transition inline-flex items-center gap-2"
        >
          Onboard via WhatsApp <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          href="/internlink/weekly-report"
          className="h-11 rounded-xl px-5 font-medium bg-white text-emerald-900 border border-emerald-200 hover:bg-emerald-50 transition inline-flex items-center gap-2"
        >
          Submit Weekly Report <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
