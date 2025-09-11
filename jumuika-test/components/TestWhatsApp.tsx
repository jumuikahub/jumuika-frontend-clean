"use client";

import { useState } from "react";
import { callApi } from "@/lib/api";

export default function TestWhatsApp() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendMessage = async () => {
    try {
      setStatus("Sending...");
      const res = await callApi("/api/whatsapp/send", "POST", {
        phone,
        message,
      });

      if (res?.success) {
        setStatus(res.message || "Message sent successfully ✅");
      } else {
        setStatus(res?.message || "Failed to send ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error occurred ❌");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Test WhatsApp API</h2>
      <input
        type="text"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={sendMessage}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Send
      </button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}
