// app/(site)/institutions/page.tsx
import Link from "next/link";
import { WHATSAPP_CTA_URL } from "@/lib/constants";

export const metadata = {
  title: "Institutions • Jumuika Hub KE",
};

export default function InstitutionsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-center">
        Institutions
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-center text-muted-foreground">
        Connect your institution to vendors and students via WhatsApp—no apps,
        no friction. Real-time communication, listings, and coordination built
        for Kenya.
      </p>

      <div className="mt-10 flex justify-center">
        <Link
          href={WHATSAPP_CTA_URL}
          className="inline-flex items-center rounded-xl border px-5 py-3 text-sm font-medium hover:bg-muted"
        >
          Contact us on WhatsApp
        </Link>
      </div>
    </main>
  );
}
