// app/(site)/page.tsx
import Section from "@/components/layout/Section";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { WHATSAPP_CTA_URL } from "@/lib/constants";

export const metadata = {
  title: "Jumuika Hub KE • WhatsApp-first commerce",
  description:
    "A WhatsApp-first smart business toolkit connecting vendors and students. Real-time commerce. No apps needed.",
};

export default function HomePage() {
  return (
    <>
      <Section className="pt-14">
        <div className="rounded-2xl bg-emerald-50/50 p-6 sm:p-10">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-emerald-900">
            Welcome to Jumuika Hub KE
          </h1>
          <p className="mt-4 max-w-3xl text-emerald-900/80">
            Jumuika Hub KE is a WhatsApp-first smart business toolkit that
            connects vendors and students seamlessly. Real-time commerce. No
            apps needed.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppCTA>Book Services via WhatsApp</WhatsAppCTA>
            <PrimaryButton href={WHATSAPP_CTA_URL} variant="outline">
              Buy Items via WhatsApp
            </PrimaryButton>
          </div>
        </div>
      </Section>
    </>
  );
}
