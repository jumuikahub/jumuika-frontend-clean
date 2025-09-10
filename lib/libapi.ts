// lib/libapi.ts
import { BASE_URL } from "@/lib/env";

// Build full API URL
function buildUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  return `${BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

// Main API fetch wrapper with generics
export async function apiFetch<T = any>(
  path: string,
  method: string = "GET",
  body?: any,
  options?: RequestInit
): Promise<T> {
  const url = buildUrl(path);

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API request failed: ${res.status} ${res.statusText}`);
  }

  return (await res.json()) as T;
}

// ✅ Alias for backward compatibility
export const callApi = apiFetch;
