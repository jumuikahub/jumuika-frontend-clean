import { ImageResponse, type NextRequest } from "next/server";
import { BRAND } from "@/lib/constants";

export const runtime = "edge";

export async function GET(_req: NextRequest) {
  return ImageResponse(
    (
      <div tw="flex items-center justify-center w-full h-full bg-white text-black">
        <span tw="text-4xl font-bold">{BRAND}</span>
      </div>
    )
  );
}
