// app/(site)/blog/page.tsx
export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
      <section className="rounded-3xl bg-emerald-50 ring-1 ring-emerald-100/80 px-5 sm:px-8 md:px-10 py-8 md:py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-900">
          Jumuika Blog
        </h1>
        <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
          Get the latest updates, business tips, and smart automation insights from the Jumuika ecosystem.
        </p>
      </section>
    </div>
  );
}
