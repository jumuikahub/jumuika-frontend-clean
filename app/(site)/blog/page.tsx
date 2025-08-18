// app/(site)/blog/page.tsx
import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Blog • ${SITE_NAME}`,
  description: "Ideas, updates, and stories from the Jumuika community.",
};

export default function BlogPage() {
  const posts = [
    {
      title: "WhatsApp-first commerce: why it wins in Kenya",
      summary:
        "Practical reasons WhatsApp is the best channel for vendors and students — and how to make it work for you.",
    },
    {
      title: "Real-time bookings without apps",
      summary:
        "A lightweight approach to services and appointments that customers already understand.",
    },
    {
      title: "From marketplace noise to direct chats",
      summary:
        "Cut latency and improve conversion by moving conversations to WhatsApp.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="mt-10 text-center">
        <h1 className="text-3xl font-semibold sm:text-4xl">Blog</h1>
        <p className="mx-auto mt-3 max-w-3xl text-zinc-700">
          Ideas, updates, and stories from the Jumuika community.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="rounded-xl border bg-white p-5">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{p.summary}</p>
            <p className="mt-3 inline-block rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600">
              COMING SOON
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
