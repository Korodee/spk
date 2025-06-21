"use client";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

const navVariants: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const navItemVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Activités", href: "/activities" },
  { name: "Tarifs", href: "/rates" },
  { name: "Contact", href: "/contact" },
];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const mobileMenuVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.1 },
  },
};

const mobileLinkVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function Navigation() {
  const pathname = usePathname();
  const [logoText, setLogoText] = useState("SPK");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrambleOnHover = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setLogoText(
        "SPK"
          .split("")
          .map((_, index) => {
            if (index < iteration) return "SPK"[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= 3) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setLogoText("SPK");
      }

      iteration += 1 / 3;
    }, 40);
  };

  const resetLogo = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setLogoText("SPK");
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 cursor-pointer left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-8 py-8 text-white"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0))",
        }}
      >
        <motion.div variants={navItemVariants}>
          <Link href="/">
            <div
              className="flex items-baseline text-4xl font-black uppercase"
              onMouseEnter={scrambleOnHover}
              onMouseLeave={resetLogo}
            >
              <span className="text-orange-400">{logoText[0]}</span>
              <span className="text-purple-500">{logoText[1]}</span>
              <span className="text-yellow-400">{logoText[2]}</span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 cursor-pointer">
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={navItemVariants}>
              <Link
                href={link.href}
                className="relative text-lg font-medium tracking-wider uppercase transition-colors hover:text-orange-400"
              >
                {link.name}
                {pathname === link.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-[-4px] block h-[2px] w-full bg-gradient-to-r from-orange-400 to-purple-500"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-8 h-8 z-50"
          >
            <motion.span
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
              className="absolute block h-0.5 w-full bg-white"
              style={{ top: "8px" }}
            />
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="absolute block h-0.5 w-full bg-white"
              style={{ top: "16px" }}
            />
            <motion.span
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
              className="absolute block h-0.5 w-full bg-white"
              style={{ top: "24px" }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-12">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={mobileLinkVariants}>
                  <Link
                    href={link.href}
                    className="text-3xl font-bold text-white uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
