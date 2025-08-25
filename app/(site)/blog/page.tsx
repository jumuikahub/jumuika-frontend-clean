import SEO from "@/components/SEO";

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Jumuika Hub KE Blog"
        description="Read insights, guides, and updates on WhatsApp-first SaaS business operations in Kenya."
        keywords="Jumuika blog, WhatsApp business insights, SaaS toolkit Kenya"
      />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="mt-4 text-lg">
          Explore tips, updates, and stories on building and running
          WhatsApp-first businesses with Jumuika Hub KE.
        </p>
      </main>
    </>
  );
}
