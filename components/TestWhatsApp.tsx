// components/TestWhatsApp.tsx
"use client";

import { useState } from "react";
import { callApi } from "@/lib/api";

export default function TestWhatsApp() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSend = async () => {
    try {
      setStatus("Sending...");
      const res = await callApi<{ messages: any[] }>("/api/whatsapp/send", "POST", {
        phone,
        message,
      });
      setStatus(`✅ Sent! ID: ${res.messages?.[0]?.id || "unknown"}`);
    } catch (err: any) {
      setStatus(`❌ Failed: ${err.message}`);
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow-md max-w-md">
      <h2 className="text-lg font-semibold mb-2">Test WhatsApp Message</h2>

      <input
        type="text"
        placeholder="Phone (e.g. 254700123456)"
        className="border p-2 w-full mb-2 rounded"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <textarea
        placeholder="Message"
        className="border p-2 w-full mb-2 rounded"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={handleSend}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Send Message
      </button>

      {status && <p className="mt-3 text-sm">{status}</p>}
    </div>
  );
}
