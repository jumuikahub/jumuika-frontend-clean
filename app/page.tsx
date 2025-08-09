import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Jumuika Hub KE – WhatsApp-First Smart Business Toolkit",
  description:
    "Connect vendors, students, and institutions via WhatsApp in real-time. No apps needed.",
};

export default function Home() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
        Welcome to <span className="text-primary">Jumuika Hub KE</span>
      </h1>

      <p className="max-w-xl text-muted-foreground">
        Jumuika Hub KE is a WhatsApp-first smart business toolkit that connects vendors,
        institutions, and students seamlessly. Real-time commerce. No apps needed.
      </p>

      <div className="flex justify-center gap-3">
        <Link
          href="https://wa.me/254700915610?text=I%20want%20to%20book%20services%20on%20Jumuika"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="text-base px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all">
            Book Services via WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
