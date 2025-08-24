// lib/env.ts

// Ensure we always use NEXT_PUBLIC_APP_URL for production, fallback to localhost in dev
export const APP_URL =
  (process.env.NEXT_PUBLIC_APP_URL &&
    process.env.NEXT_PUBLIC_APP_URL.replace(/\/+$/, "")) ||
  "process.env.NEXT_PUBLIC_APP_URL";
