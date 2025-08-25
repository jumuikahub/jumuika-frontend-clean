"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"";
import { ArrowRight } from "lucide-react";

export default function PrimaryCTA() {
  return (
    <section className="relative bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20 px-6 text-center overflow-hidden">
      {/* Background animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-repeat"
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Power Your Business on WhatsApp
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Jumuika Hub KE helps you run bookings, payments, and customer
          engagement seamlessly—without needing a separate app.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* WhatsApp CTA */}
          <Button
            asChild
            size="lg"
            className="bg-white text-green-700 hover:bg-gray-100 font-semibold rounded-2xl shadow-md transition"
          >
            <Link
              href="https://wa.me/254104250912?text=Hi%20Jumuika%2C%20I%27m%20interested%20in%20getting%20started"
              target="_blank"
            >
              Get Started on WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          {/* Learn More CTA */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-700 rounded-2xl shadow-md transition"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
