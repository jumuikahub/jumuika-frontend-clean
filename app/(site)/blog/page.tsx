// app/(site)/blog/page.tsx
import Container from "@/components/layout/Container";

export const metadata = {
  title: "Blog | Jumuika Hub KE",
  description:
    "Updates, tips, and success stories from WhatsApp-first commerce in Kenya.",
};

const POSTS = [
  {
    title: "WhatsApp-first commerce: why it wins in Kenya",
    date: "Coming soon",
    excerpt:
      "Practical reasons WhatsApp is the best channel for vendors and students — and how to make it work for you.",
  },
  {
    title: "Real-time bookings without apps",
    date: "Coming soon",
    excerpt:
      "A lightweight approach to services and appointments that customers already understand.",
  },
  {
    title: "From marketplace noise to direct chats",
    date: "Coming soon",
    excerpt:
      "Cut latency and improve conversion by moving conversations to WhatsApp.",
  },
];

export default function BlogPage() {
  return (
    <section className="w-full bg-white">
      <Container>
        <div className="mx-auto max-w-4xl py-14 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Ideas, updates, and stories from the Jumuika community.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 pb-16 sm:grid-cols-3">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">
                {p.date}
              </p>
              <p className="mt-3 text-sm text-slate-600">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
