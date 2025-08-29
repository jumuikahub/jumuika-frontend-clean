/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Add rewrites so API calls can be proxied safely
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://graph.facebook.com/:path*", // Meta Graph API proxy
      },
    ];
  },

  // Optional: security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
