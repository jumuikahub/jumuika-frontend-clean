// app/(site)/blog/page.tsx
export const metadata = {
  title: "Blog • Jumuika Hub KE",
};

const posts = [
  {
    title: "WhatsApp-first commerce: why it wins in Kenya",
    summary:
      "Practical reasons WhatsApp is the best channel for vendors and students — and how to make it work for you.",
    badge: "COMING SOON",
  },
  {
    title: "Real-time bookings without apps",
    summary:
      "A lightweight approach to services and appointments that customers already understand.",
    badge: "COMING SOON",
  },
  {
    title: "From marketplace noise to direct chats",
    summary:
      "Cut latency and improve conversion by moving conversations to WhatsApp.",
    badge: "COMING SOON",
  },
];

export default function BlogPage() {
  return (
    <section>
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-700">
          Ideas, updates, and stories from the Jumuika community.
        </p>
      </header>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {posts.map((p) => (
          <article
            key={p.title}
            className="rounded-xl border border-zinc-100 bg-white p-5"
          >
            <div className="text-[10px] font-semibold tracking-wider text-zinc-500">
              {p.badge}
            </div>
            <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-zinc-700">{p.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
