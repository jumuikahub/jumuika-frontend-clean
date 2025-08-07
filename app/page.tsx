// app/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jumuika Hub KE | WhatsApp-First Smart Toolkit",
  description:
    "Helping vendors, students, and institutions transact via WhatsApp.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Jumuika Hub KE</h1>
        <p className="text-muted-foreground">
          Jumuika Hub KE is a WhatsApp-first smart business toolkit that
          connects vendors, institutions, and students seamlessly. Real-time
          commerce. No apps needed.
        </p>
      </div>
    </main>
  );
}
