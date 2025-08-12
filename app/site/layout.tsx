// app/(site)/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Jumuika Hub KE",
    template: "%s | Jumuika Hub KE",
  },
  description:
    "WhatsApp-first smart business toolkit that connects vendors, institutions and students. Real-time commerce. No apps needed.",
  openGraph: {
    title: "Jumuika Hub KE",
    description:
      "WhatsApp-first smart business toolkit that connects vendors, institutions and students. Real-time commerce. No apps needed.",
    url: "https://jumuikahub.com",
    siteName: "Jumuika Hub KE",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jumuika Hub KE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jumuika Hub KE",
    description:
      "WhatsApp-first smart business toolkit that connects vendors, institutions and students.",
    images: ["/og-image.png"],
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout just wraps site pages; the global layout (app/layout.tsx)
  // already injects Navbar/Footer and global head tags.
  return <>{children}</>;
}
