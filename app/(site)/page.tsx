// app/(site)/page.tsx
import PrimaryButton from "@/components/ui/PrimaryButton";
import { WHATSAPP_CTA_URL } from "@/lib/constants";

export default function HomePage() {
  return (
    <section className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-8 text-center sm:p-12">
      <h1 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-5xl">
        Welcome to Jumuika Hub KE
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-zinc-700">
        Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects
        vendors, institutions, and students seamlessly. Real-time commerce. No
        apps needed.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <PrimaryButton href={WHATSAPP_CTA_URL}>
          Book Services via WhatsApp
        </PrimaryButton>
        <PrimaryButton href={WHATSAPP_CTA_URL} variant="outline">
          Buy Items via WhatsApp
        </PrimaryButton>
      </div>
    </section>
  );
}
