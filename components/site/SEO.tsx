// components/site/SEO.tsx
import type { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export function generateMetadata({
  title = "Jumuika Hub KE",
  description = "WhatsApp-First SaaS Business Toolkit for Kenya – bookings, payments, referrals, and more.",
  url = "https://jumuikahub.com",
  image = "https://jumuikahub.com/og-image.png",
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Jumuika Hub KE",
      images: [{ url: image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}
