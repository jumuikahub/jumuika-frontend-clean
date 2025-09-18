import { GET, POST } from "../app/api/bookings/route";

describe("Bookings API", () => {
  it("should return an empty list initially", async () => {
    const res = await GET();
    const json = await res.json();
    expect(res.status).toBe(200);
    expect(json).toEqual({ status: "ok", data: [] });
  });

  it("should create a new booking when valid data is provided", async () => {
    const mockReq = {
      json: async () => ({ name: "Test User", date: "2025-09-18" }),
    } as unknown as Request;

    const res = await POST(mockReq);
    const json = await res.json();

    expect(res.status).toBe(201);
    expect(json.status).toBe("ok");
    expect(json.data).toHaveProperty("id");
    expect(json.data.name).toBe("Test User");
  });

  it("should return 400 when required fields are missing", async () => {
    const mockReq = {
      json: async () => ({}),
    } as unknown as Request;

    const res = await POST(mockReq);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.status).toBe("error");
  });
});
