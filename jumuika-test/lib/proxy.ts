export async function proxyFetch(path: string, options: RequestInit = {}): Promise<any> {
  try {
    const res = await fetch(`/api/${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });

    if (!res.ok) {
      throw new Error(`Proxy fetch failed with status ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Proxy error:", error);
    throw error;
  }
}
