import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "#ECFDF5",
          color: "#064E3B",
          fontSize: 64,
          fontWeight: 800,
        }}
      >
        <div>Jumuika Hub KE</div>
        <div style={{ fontSize: 28, marginTop: 16, fontWeight: 500, color: "#064E3B" }}>
          WhatsApp-first business toolkit for vendors & institutions
        </div>
      </div>
    ),
    size
  );
}
