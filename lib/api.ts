// lib/api.ts

/**
 * Utility to call backend API endpoints
 * @param endpoint - API route (e.g. "/api/whatsapp/send")
 * @param method - HTTP method (default: POST)
 * @param body - Request payload (optional)
 */
export async function callApi<T>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "POST",
  body?: Record<string, any>
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "";

  const res = await fetch(`${baseUrl}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`API call failed: ${error}`);
  }

  return res.json() as Promise<T>;
}
