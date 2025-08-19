// app/(site)/blog/page.tsx
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: `Blog • ${BRAND.name}`,
  description: "Ideas, updates, and stories from the Jumuika community.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="my-8 rounded-2xl border bg-emerald-50 p-8 text-center md:my-10 md:p-12">
        <h1 className="text-3xl font-bold text-emerald-900 md:text-4xl">Blog</h1>
        <p className="mx-auto mt-3 max-w-3xl text-emerald-900/90">
          Ideas, updates, and stories from the Jumuika community.
        </p>
      </div>
    </section>
  );
}
