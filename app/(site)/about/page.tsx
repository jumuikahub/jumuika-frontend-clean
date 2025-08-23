// app/(site)/about/page.tsx
import { BRAND, TAGLINE } from "@/lib/constants";

export const metadata = {
  title: `About ${BRAND}`,
  description: TAGLINE,
};

export default function AboutPage() {
  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">About {BRAND}</h1>
      <p>{TAGLINE}</p>
    </section>
  );
}
