import SEO from "@/components/site/SEO"; // ✅ Fixed path

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Jumuika Hub KE Blog"
        description="Insights, updates, and stories from Jumuika Hub KE. Stay informed on WhatsApp commerce trends in Kenya."
      />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Our Blog</h1>
        <p>
          Welcome to the Jumuika Hub KE Blog. Here, we share updates, insights,
          and stories on the future of WhatsApp-first commerce in Kenya.
        </p>
      </main>
    </>
  );
}
