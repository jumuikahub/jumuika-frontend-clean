export default function HomePage() {
  return (
    <section className="rounded-2xl bg-accent/20 border p-6 md:p-10">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
        Welcome to Jumuika Hub KE
      </h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">
        Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects vendors,
        institutions, and students seamlessly. Real-time commerce. No apps needed.
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href="#book-services"
          className="rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90"
        >
          Book Services via WhatsApp
        </a>
        <a
          href="#buy-items"
          className="rounded-full border px-5 py-3 text-sm font-medium hover:bg-accent"
        >
          Buy Items via WhatsApp
        </a>
      </div>
    </section>
  );
}
