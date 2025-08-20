// app/(site)/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Blog • ${BRAND_NAME}`,
  description: "Ideas, updates, and stories from the Jumuika community.",
};

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Blog
      </h1>

      <p className="mt-4 text-base md:text-lg text-zinc-600">
        We’re curating helpful stories, launch notes, and practical guides for vendors and students.
        Check back soon or{" "}
        <Link
          href="/about"
          className="underline underline-offset-4 hover:no-underline"
        >
          learn more about {BRAND_NAME}
        </Link>
        .
      </p>

      <div className="mt-10 inline-flex items-center justify-center rounded-xl px-5 py-3 btn-primary">
        Coming soon
      </div>
    </main>
  );
}
