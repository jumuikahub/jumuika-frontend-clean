// app/(site)/layout.tsx
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </>
  );
}
