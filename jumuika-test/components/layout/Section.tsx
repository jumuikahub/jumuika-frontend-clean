// components/layout/Section.tsx
export default function Section({
  children,
  className = "",
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <section className={["max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12", className].join(" ")}>
      {children}
    </section>
  );
}
