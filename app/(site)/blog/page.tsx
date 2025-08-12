import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Jumuika Hub KE",
  description:
    "Explore insights, tips, and updates from Jumuika Hub KE. Stay informed on WhatsApp commerce, vendor tools, and platform innovations.",
};

export default function BlogPage() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-3xl font-semibold mb-4">Jumuika Blog</h1>
      <p className="text-gray-600">
        Get the latest updates, business tips, and smart automation insights
        from the Jumuika ecosystem.
      </p>
    </main>
  );
}
