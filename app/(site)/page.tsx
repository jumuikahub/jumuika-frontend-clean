// app/(site)/page.tsx  (only the hero section shown)
export default function Home() {
  return (
    <section className="container mx-auto px-4">
      <div className="rounded-2xl border bg-accent/40 p-8 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-emerald-900 md:text-5xl">
            Welcome to Jumuika Hub KE
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Jumuika Hub KE is a WhatsApp-first smart business toolkit that
            connects vendors, institutions, and students seamlessly. Real-time
            commerce. No apps needed.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/"
              className="btn-primary"
            >
              Book Services via WhatsApp
            </a>
            <a
              href="https://wa.me/"
              className="btn-outline"
            >
              Buy Items via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
