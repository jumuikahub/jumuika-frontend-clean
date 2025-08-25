import SEO from "@/components/site/SEO"; // ✅ Fixed path

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Jumuika Hub KE"
        description="Learn about Jumuika Hub KE’s mission to transform Kenyan commerce through WhatsApp-first solutions."
      />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p>
          Jumuika Hub KE is building Kenya’s first WhatsApp-first business toolkit.
          We empower vendors, institutions, and buyers to connect seamlessly
          without the need for traditional apps.
        </p>
      </main>
    </>
  );
}
