// app/(site)/about/page.tsx
import metadata from "./metadata";

export { metadata };

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900 sm:text-5xl">
          About Jumuika Hub KE
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-zinc-700">
          We help vendors and students connect and transact seamlessly on
          WhatsApp. Our mission is to enable real-time commerce — no apps, no
          friction.
        </p>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Simple",
            body:
              "WhatsApp-first. Start instantly — no app installs.",
          },
          {
            title: "Reliable",
            body:
              "Real-time interactions that keep your operations moving.",
          },
          {
            title: "Inclusive",
            body:
              "Designed for vendors and students across Kenya.",
          },
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-emerald-200 bg-white p-6"
          >
            <h3 className="text-lg font-semibold text-emerald-900">{c.title}</h3>
            <p className="mt-2 text-zinc-700">{c.body}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
