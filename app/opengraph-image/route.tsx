// app/opengraph-image/route.tsx
import { ImageResponse } from "next/server";
import constants from "@/lib/constants";

export const runtime = "edge";

export async function GET() {
  const { BRAND } = constants;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          fontSize: 72,
          fontWeight: 700,
          color: "#111827",
        }}
      >
        {BRAND}
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
