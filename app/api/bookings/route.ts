import { NextResponse } from "next/server";

// Temporary in-memory store (replace with DB integration later)
const bookings: { id: string; name: string; date: string }[] = [];

/**
 * GET /api/bookings
 * Returns all bookings
 */
export async function GET() {
  return NextResponse.json({ status: "ok", data: bookings });
}

/**
 * POST /api/bookings
 * Creates a new booking
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, date } = body;

    if (!name || !date) {
      return NextResponse.json(
        { status: "error", message: "Missing required fields" },
        { status: 400 }
      );
    }

    const newBooking = {
      id: Date.now().toString(),
      name,
      date,
    };

    bookings.push(newBooking);

    return NextResponse.json({ status: "ok", data: newBooking }, { status: 201 });
  } catch {
    return NextResponse.json({ status: "error", message: "Invalid request body" }, { status: 400 });
  }
}
