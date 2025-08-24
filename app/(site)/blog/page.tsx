import PrimaryCTAs from "@/components/PrimaryCTAs";

export default function BlogPage() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6">Jumuika Blog</h1>
        <p className="text-lg mb-6">
          Stay updated with the latest news, insights, and tutorials about
          WhatsApp-first commerce, SaaS innovations, and smart business
          automation in Kenya and beyond.
        </p>
        <PrimaryCTAs />
      </div>
    </main>
  );
}
