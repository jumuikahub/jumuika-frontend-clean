/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" }, // keep broad for now; we can tighten later
    ],
  },
  // IMPORTANT: Remove/disable the experimental optimizeCss flag that requires "critters"
  experimental: {
    // optimizeCss: true, // ❌ remove/comment this
    // optimizePackageImports can stay off unless you're actively using it
  },
};

export default nextConfig;
