"use client";

import React from "react";

export default function SafeStub() {
  return (
    <div className="p-4 rounded-xl bg-gray-100 border border-gray-300 text-gray-700 shadow-sm">
      <h2 className="text-lg font-semibold">API Connection Unavailable</h2>
      <p className="text-sm mt-2">
        Our WhatsApp API service is temporarily unreachable. 
        Please try again later or contact support.
      </p>
    </div>
  );
}
