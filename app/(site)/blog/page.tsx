// app/(site)/blog/page.tsx
import constants from "@/lib/constants";
const { BRAND, TAGLINE } = constants;

export const metadata = {
  title: `Blog • ${BRAND}`,
  description: TAGLINE,
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Blog
      </h1>
      <p className="mt-3 max-w-2xl text-zinc-600">
        Ideas, updates, and stories from the {BRAND} community.
      </p>
      <div className="mt-8 rounded-xl border border-dashed p-10 text-center text-zinc-500">
        Posts coming soon.
      </div>
    </section>
  );
}
