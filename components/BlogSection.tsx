// components/BlogSection.tsx
export default function BlogSection() {
  const blogPosts = [
    { title: "Launching Jumuika Hub KE", date: "Sep 1, 2025", link: "#" },
    { title: "Automated Bookings via WhatsApp", date: "Aug 25, 2025", link: "#" },
    { title: "Maximizing Float Rewards", date: "Aug 10, 2025", link: "#" },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <a
              key={idx}
              href={post.link}
              className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-500 text-sm">{post.date}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
