import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Jumuika Hub KE",
  description: "Insights, updates, and guides from Jumuika Hub KE.",
};

export default function BlogPage() {
  const posts = [
    { slug: "launch", title: "Jumuika Hub KE Launch", date: "2025-08-01" },
    { slug: "meta-compliance", title: "Meta Compliance for WhatsApp SaaS", date: "2025-08-10" },
  ];

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-2">
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
