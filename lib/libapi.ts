// lib/api.ts
import { BASE_URL } from "@/lib/env";

function buildUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${normalized}`;
}

export async function apiGet<T = unknown>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(buildUrl(path), {
    ...init,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    // If you call this server-side and need revalidation, pass it via init.next
  });
  if (!res.ok) throw new Error(`GET ${buildUrl(path)} -> ${res.status}`);
  return (await res.json()) as T;
}

export async function apiPost<T = unknown>(path: string, body: any, init?: RequestInit): Promise<T> {
  const res = await fetch(buildUrl(path), {
    ...init,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${buildUrl(path)} -> ${res.status}`);
  return (await res.json()) as T;
}
