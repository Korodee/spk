"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="w-full flex justify-center py-6 gap-8 bg-white/80 dark:bg-black/80 backdrop-blur-md fixed top-0 left-0 z-50 shadow-sm"
    >
      <Link
        href="/"
        className="font-semibold text-lg hover:text-blue-500 transition-colors"
      >
        Home
      </Link>
      <Link
        href="/activities"
        className="font-semibold text-lg hover:text-blue-500 transition-colors"
      >
        Activities
      </Link>
      <Link
        href="/rates"
        className="font-semibold text-lg hover:text-blue-500 transition-colors"
      >
        Rates
      </Link>
      <Link
        href="/contact"
        className="font-semibold text-lg hover:text-blue-500 transition-colors"
      >
        Contact
      </Link>
    </motion.nav>
  );
}
