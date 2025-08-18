// app/(site)/blog/page.tsx
import Section from "@/components/layout/Section";

export const metadata = {
  title: "Blog • Jumuika Hub KE",
  description:
    "Ideas, updates, and stories from the Jumuika community.",
};

const posts = [
  {
    title: "WhatsApp-first commerce: why it wins in Kenya",
    kicker: "Coming soon",
    excerpt:
      "Practical reasons WhatsApp is the best channel — and how to make it work for vendors and students.",
  },
  {
    title: "Real-time bookings without apps",
    kicker: "Coming soon",
    excerpt:
      "A lightweight approach to services and appointments that customers already understand.",
  },
  {
    title: "From marketplace noise to direct chats",
    kicker: "Coming soon",
    excerpt:
      "Cut latency and improve conversion by moving conversations to WhatsApp.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Section className="pt-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-emerald-900">
          Blog
        </h1>
        <p className="mt-4 max-w-3xl text-emerald-900/80">
          Ideas, updates, and stories from the Jumuika community.
        </p>
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="rounded-xl border border-emerald-900/10 p-5"
            >
              <h3 className="font-semibold text-emerald-900">{p.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-emerald-700">
                {p.kicker}
              </p>
              <p className="mt-2 text-sm text-emerald-900/80">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
