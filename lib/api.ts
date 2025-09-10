// lib/api.ts
export async function callApi(
  path: string,
  method: string = "GET",
  body?: any
): Promise<{ success: boolean; message?: string; data?: any }> {
  try {
    const res = await fetch(path, {
      method,
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    });

    const json = await res.json().catch(() => ({}));

    if (!res.ok) {
      return {
        success: false,
        message: json?.message || `Request failed with ${res.status}`,
      };
    }

    return {
      success: true,
      message: json?.message,
      data: json?.data,
    };
  } catch (err: any) {
    console.error("API call error:", err);
    return {
      success: false,
      message: "Network error",
    };
  }
}
