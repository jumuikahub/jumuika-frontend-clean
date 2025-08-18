// app/(site)/about/page.tsx
export const metadata = {
  title: "About • Jumuika Hub KE",
};

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          About Jumuika Hub KE
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-700">
          We help vendors, institutions, and students connect and transact
          seamlessly on WhatsApp. Our mission is to enable real-time commerce —
          no apps, no friction.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-3">
        {[
          {
            title: "Simple",
            body: "WhatsApp-first. Start instantly — no app installs.",
          },
          {
            title: "Reliable",
            body: "Real-time interactions that keep your operations moving.",
          },
          {
            title: "Inclusive",
            body: "Designed for vendors and students across Kenya.",
          },
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-xl border border-zinc-100 bg-white p-5"
          >
            <h3 className="font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-zinc-700">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
