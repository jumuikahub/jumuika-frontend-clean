import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import HowItWorksSection from "@/components/HowItWorksSection";

export const metadata = {
  title: "Jumuika Hub KE",
  description: "WhatsApp-first SaaS business toolkit for Kenya — bookings, payments, rewards, and more."
};

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-12 space-y-16">
      <HeroSection />
      <HowItWorksSection />
      <AboutSection />
      <BlogSection />
    </main>
  );
}
