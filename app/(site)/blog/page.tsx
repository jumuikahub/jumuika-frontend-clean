import BlogSection from "@/components/BlogSection";

export const metadata = {
  title: "Blog | Jumuika Hub KE",
  description: "Read insights, guides, and updates from Jumuika Hub KE."
};

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <BlogSection />
    </main>
  );
}
