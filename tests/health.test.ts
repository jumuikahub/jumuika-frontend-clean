import { GET } from "@/app/api/health/route";

describe("Health Check API", () => {
  it("should return ok status with uptime and timestamp", async () => {
    const response = await GET();
    const body = await response.json();

    expect(body).toHaveProperty("status", "ok");
    expect(typeof body.timestamp).toBe("string");
    expect(typeof body.uptime).toBe("number");
  });
});
