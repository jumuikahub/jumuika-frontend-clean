import { NextResponse } from "next/server";

/**
 * Simple health check endpoint.
 * Returns service status, uptime, and current timestamp.
 */
export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
}
