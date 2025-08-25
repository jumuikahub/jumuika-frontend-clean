import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

export default function SEO({ title, description, url, image }: SEOProps) {
  const siteName = "Jumuika Hub KE";
  const defaultUrl = "https://jumuika.ke";
  const defaultImage = "/og-default.png"; // update with your branded OG image
  const fullUrl = url || defaultUrl;

  // 🔹 Consistent CTA branding across OpenGraph + Twitter
  const brandedTitle = `${title} | ${siteName} – Get Started with Jumuika`;
  const brandedDescription =
    `${description} 🚀 Join today and tap into Jumuika’s WhatsApp-first smart tools. Your growth starts here.`; 

  return (
    <Head>
      {/* Standard SEO */}
      <title>{brandedTitle}</title>
      <meta name="description" content={brandedDescription} />

      {/* Open Graph */}
      <meta property="og:title" content={brandedTitle} />
      <meta property="og:description" content={brandedDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={brandedTitle} />
      <meta name="twitter:description" content={brandedDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Head>
  );
}
