// app/opengraph-image/route.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";

// Default metadata for the OG image
const title = "Jumuika Hub KE";
const description =
  "WhatsApp-First SaaS Toolkit for Institutions, Vendors & Businesses. Simplify bookings, payments, and communication — all on WhatsApp.";
const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://jumuika.vercel.app";
const logoUrl = `${siteUrl}/logo.png`; // Ensure logo.png exists in /public

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          backgroundImage: "linear-gradient(to bottom right, #e0f2fe, #f9fafb)",
          fontSize: 42,
          fontFamily: "sans-serif",
          color: "#111827",
          padding: "40px",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <img
          src={logoUrl}
          alt="Jumuika Logo"
          width={120}
          height={120}
          style={{ borderRadius: "20px", marginBottom: "30px" }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#0f172a",
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 32,
            maxWidth: "900px",
            lineHeight: 1.4,
            color: "#334155",
          }}
        >
          {description}
        </div>

        {/* Footer Website */}
        <div
          style={{
            marginTop: "50px",
            fontSize: 28,
            fontWeight: "500",
            color: "#2563eb",
          }}
        >
          {siteUrl.replace("https://", "").replace("http://", "")}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
