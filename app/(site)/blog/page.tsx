// app/(site)/blog/page.tsx
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Our Blog</h1>
      <p className="text-gray-700 mb-6">
        Stay updated with the latest news, product updates, and insights on 
        WhatsApp-powered commerce.
      </p>
      <PrimaryButton>Read Articles</PrimaryButton>
    </main>
  );
}
