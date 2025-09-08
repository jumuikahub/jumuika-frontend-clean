import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: "About | Jumuika Hub KE",
  description: "Learn about Jumuika Hub KE, our mission, and how we empower businesses in Kenya."
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <AboutSection />
    </main>
  );
}
