"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Jumuika Hub KE
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Kenya’s first WhatsApp-First SaaS toolkit — powering smart payments, 
          bookings, and automated business workflows.
        </p>
        <Link
          href="https://wa.me/254700915610"
          target="_blank"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-2xl shadow-md transition"
        >
          Get Started on WhatsApp
        </Link>
      </motion.div>
    </section>
  );
}
