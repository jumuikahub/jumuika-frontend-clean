// app/(site)/blog/page.tsx
import { BRAND, TAGLINE } from "@/lib/constants";

export const metadata = {
  title: `Blog - ${BRAND}`,
  description: TAGLINE,
};

export default function BlogPage() {
  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">{BRAND} Blog</h1>
      <p>Stay tuned for insights and stories around {TAGLINE}.</p>
    </section>
  );
}
