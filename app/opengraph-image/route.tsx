// app/opengraph-image/route.tsx
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Important: Update with your brand colors / logo path
const brand = {
  name: "Jumuika Hub KE",
  tagline: "WhatsApp-First SaaS Business Toolkit",
  logo: `${process.env.NEXT_PUBLIC_APP_URL}/logo.png`,
  bgColor: "#ffffff",
  textColor: "#0f172a", // slate-900
};

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: brand.bgColor,
          color: brand.textColor,
          fontSize: 48,
          fontWeight: 700,
          textAlign: "center",
          padding: "40px",
        }}
      >
        {/* Logo */}
        <img
          src={brand.logo}
          alt={brand.name}
          width={120}
          height={120}
          style={{ borderRadius: "50%", marginBottom: "20px" }}
        />

        {/* Title */}
        <div>{brand.name}</div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            marginTop: "12px",
            color: "#334155", // slate-600
          }}
        >
          {brand.tagline}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
