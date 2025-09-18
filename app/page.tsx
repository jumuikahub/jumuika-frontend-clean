import AuthButtons from "@/components/AuthButtons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Jumuika Hub KE</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        A WhatsApp-first SaaS business toolkit. Use the buttons below to log in or out and start
        exploring Supabase-powered auth.
      </p>
      <AuthButtons />
    </main>
  );
}
