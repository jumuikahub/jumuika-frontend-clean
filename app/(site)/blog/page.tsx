// app/(site)/blog/page.tsx
import Link from "next/link";
import constants from "@/lib/constants";

const { BRAND_NAME, TAGLINE, WHATSAPP_CTA_URL } = constants;

export const metadata = {
  title: `Blog • ${BRAND_NAME}`,
  description: TAGLINE,
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 text-center">
      <h1 className="text-4xl font-bold md:text-5xl">Blog</h1>
      <p className="mx-auto mt-4 max-w-2xl text-neutral-700">
        Ideas, updates, and stories from the {BRAND_NAME} community.
      </p>

      {/* Empty state / placeholder */}
      <div className="mx-auto mt-10 max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold">Coming soon</h2>
        <p className="mt-2 text-sm text-neutral-700">
          We’re lining up helpful tips for vendors, product announcements,
          and case studies. Meanwhile, you can get started right away.
        </p>

        <div className="mt-6">
          <Link
            href={WHATSAPP_CTA_URL}
            target="_blank"
            className="inline-flex rounded-lg bg-primary px-5 py-2.5 text-white shadow hover:bg-primary/90"
          >
            Get Started via WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
