import { createBrowserClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { CookieOptions } from "@supabase/ssr";

// --- Edge Client ---
export function createEdgeClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookies().get(name)?.value;
        },
        set() {}, // no-op
        remove() {}, // no-op
      },
    }
  );
}

// --- Server Client ---
export function createServerClient() {
  const cookieStore = cookies();

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch {
            // Edge runtime won't allow set
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: "", ...options, maxAge: 0 });
          } catch {
            // Edge runtime won't allow remove
          }
        },
      },
    }
  );
}

// --- Runtime Dispatcher ---
export function getSupabaseClient() {
  // Edge runtimes don’t expose process.versions.node
  const isEdge = typeof process === "undefined" || !(process as any).versions?.node;

  return isEdge ? createEdgeClient() : createServerClient();
}
