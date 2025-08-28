"use client";

import { useState } from "react";

export default function TestApiPage() {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function callHelloApi() {
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/hello");
      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }
      const data = await res.json();
      setMessage(data.message);
    } catch (err: any) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Test API Page</h1>
      <button
        onClick={callHelloApi}
        disabled={loading}
        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Loading..." : "Call /api/hello"}
      </button>
      {message && (
        <p className="mt-4 text-lg">
          <strong>Response:</strong> {message}
        </p>
      )}
    </main>
  );
}
