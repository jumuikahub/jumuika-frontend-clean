// app/(site)/layout.tsx
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Sticky navbar */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <Navbar />
      </header>

      {/* Gradient hero band + page content */}
      <div className="relative isolate flex-1">
        {/* background gradient band */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-emerald-50/60 to-white"
        />

        <main className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
          {children}
        </main>
      </div>

      {/* Compact sticky footer */}
      <footer className="border-t bg-white">
        <Footer />
      </footer>
    </div>
  );
}
