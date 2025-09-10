// /app/api/whatsapp/send/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { phone, message } = await req.json();

    if (!phone || !message) {
      return NextResponse.json(
        { success: false, message: "Phone and message are required" },
        { status: 400 }
      );
    }

    // 🔹 Mock success response for now
    return NextResponse.json({
      success: true,
      message: "Message sent successfully (mocked)",
      data: {
        phone,
        message,
        provider: "mock",
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
