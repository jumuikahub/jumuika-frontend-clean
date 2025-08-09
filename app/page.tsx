import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jumuika Hub KE – WhatsApp-First Smart Business Toolkit",
  description:
    "Connect vendors, students, and institutions via WhatsApp in real-time. No apps needed.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Welcome to Jumuika Hub KE
      </h1>
      <p className="mt-4 max-w-2xl text-gray-600">
        Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects
        vendors, institutions, and students seamlessly. Real-time commerce. No
        apps needed.
      </p>

      <div className="mt-8">
        <Link
          href="https://wa.me/254700915610?text=Hello%20Jumuika%20Hub%20KE"
          target="_blank"
        >
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Buy Items via WhatsApp
          </Button>
        </Link>
      </div>
    </main>
  );
}
