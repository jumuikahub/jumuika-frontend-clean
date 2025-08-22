import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import constants from "@/lib/constants";

export const runtime = "edge";
export const contentType = "image/png";
export const alt = "Jumuika Hub KE";
export const size = { width: 1200, height: 630 };

export async function GET(_req: NextRequest) {
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
          background: "#ECFDF5" /* brand-50 */,
          fontSize: 72,
          fontWeight: 800,
          color: "#0A0F0D",
          letterSpacing: "-0.02em",
        }}
      >
        {BRAND}
      </div>
    ),
    { width: size.width, height: size.height }
  );
}
