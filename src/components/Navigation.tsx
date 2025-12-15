"use client";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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
  { href: "/", label: "Accueil" },
  { href: "/#activities", label: "Activités" },
  { href: "/hub-de-jeux", label: "Hub de Jeux" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

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
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Hide banner on hub-de-jeux page
  const isBannerVisible = bannerVisible && pathname !== "/hub-de-jeux";

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate top position based on banner visibility and screen size
  const navTop = isBannerVisible ? (isMobile ? "43px" : "52px") : "0";

  const scrollToActivities = () => {
    if (pathname === "/") {
      // If we're on the home page, scroll to the activities section
      const activitiesSection = document.getElementById("activities");
      if (activitiesSection) {
        activitiesSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      router.push("/#activities");
    }
  };

  // Check if banner is visible - starts as visible, only changes when dismissed
  useEffect(() => {
    // Listen for banner dismissal event
    const handleBannerDismissed = () => {
      setBannerVisible(false);
    };

    window.addEventListener("bannerDismissed", handleBannerDismissed);

    return () => {
      window.removeEventListener("bannerDismissed", handleBannerDismissed);
    };
  }, []);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  // Handle hash navigation for activities section
  useEffect(() => {
    if (pathname === "/" && window.location.hash === "#activities") {
      setTimeout(() => {
        const activitiesSection = document.getElementById("activities");
        if (activitiesSection) {
          activitiesSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [pathname]);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed cursor-pointer left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-8 py-4 text-white transition-all duration-300 ${
          isScrolled ? "bg-black/50 backdrop-blur-md" : ""
        }`}
        style={{
          top: navTop,
          background: isScrolled
            ? undefined
            : "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0))",
          transition: "top 0.3s ease-in-out",
        }}
      >
        <motion.div variants={navItemVariants}>
          <Link href="/">
            <div className="relative h-14 w-44 md:h-16 md:w-56 overflow-hidden">
              <div className="absolute inset-0 scale-125">
                <Image
                  src="/spk-logo.png"
                  alt="SPK Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 cursor-pointer">
          {navLinks.map((link) => (
            <motion.div key={link.label} variants={navItemVariants}>
              {link.label === "Activités" ? (
                <button
                  onClick={scrollToActivities}
                  className="relative text-lg font-medium tracking-wider uppercase transition-colors hover:text-orange-400"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="relative text-lg font-medium tracking-wider uppercase transition-colors hover:text-orange-400"
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 bottom-[-4px] block h-[2px] w-full bg-gradient-to-r from-orange-400 to-purple-500"
                    />
                  )}
                </Link>
              )}
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
                <motion.div key={link.label} variants={mobileLinkVariants}>
                  {link.label === "Activités" ? (
                    <button
                      onClick={() => {
                        scrollToActivities();
                        setIsMenuOpen(false);
                      }}
                      className="text-3xl font-bold text-white uppercase"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-3xl font-bold text-white uppercase"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
