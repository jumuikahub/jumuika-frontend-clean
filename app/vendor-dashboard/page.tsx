"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VendorDashboard() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 px-6 py-16">
      <h1 className="text-4xl font-bold text-green-600 text-center mb-8">
        Vendor Dashboard
      </h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-green-600 mb-3">Manage Listings</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Add, update, or remove your products and services directly from your dashboard.
          </p>
          <Button asChild className="rounded-2xl">
            <Link href="/vendor-dashboard/listings">Go to Listings</Link>
          </Button>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-green-600 mb-3">Bookings</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Track and manage customer reservations and service bookings easily.
          </p>
          <Button asChild variant="outline" className="rounded-2xl">
            <Link href="/vendor-dashboard/bookings">View Bookings</Link>
          </Button>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-green-600 mb-3">Analytics</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Monitor sales, earnings, and referral rewards in real time.
          </p>
          <Button asChild className="rounded-2xl">
            <Link href="/vendor-dashboard/analytics">View Analytics</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
