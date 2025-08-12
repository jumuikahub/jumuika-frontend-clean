// lib/utils.ts

// Keep it dependency-free. This mirrors the shadcn 'cn' helper.
export type ClassValue = string | null | undefined | false;

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ");
}

// If anywhere in your code you used a default import for this helper,
// you can optionally expose a default that points to cn:
export default cn;
