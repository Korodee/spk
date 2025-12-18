"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiX, FiArrowRight } from "react-icons/fi";

const AnnouncementBanner = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  
  // Hide banner on hub-de-jeux page
  const shouldShow = isVisible && pathname !== "/hub-de-jeux";

  const handleDismiss = () => {
    setIsVisible(false);
    // Dispatch custom event to notify navbar
    window.dispatchEvent(new CustomEvent("bannerDismissed"));
  };

  // Return null if banner shouldn't show (no whitespace)
  if (!shouldShow) {
    return null;
  }

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-600 via-orange-500 to-red-600 shadow-lg"
        >
          <div className="relative w-full">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,rgba(255,255,255,.1)_100%)] bg-[length:20px_20px]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
              <div className="flex flex-row items-center justify-center gap-1 sm:gap-3">
                {/* Text Content */}
                <div className="text-center sm:text-left sm:flex-1 flex items-center">
                  <p className="text-white flex flex-row items-center justify-center sm:justify-start font-bold text-sm sm:text-base md:text-lg tracking-wide">
                    <span className="inline-block">
                      Nouveautés{" "}
                      <span className="hidden sm:inline">Découvrez nos nouvelles activités excitantes</span>
                    </span>
                  </p>
                </div>

                <Link href="/hub-de-jeux" className="flex-shrink-0 flex items-center">
                  <span className="sm:hidden text-white text-[12px] font-bold uppercase tracking-wider underline underline-offset-2">
                    Découvrir les nouveautés
                  </span>
                  <motion.button
                    className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white/30 transition-all duration-300 whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Découvrir les nouveautés
                    <FiArrowRight className="text-sm" />
                  </motion.button>
                </Link>

                {/* Close Button */}
                <button
                  onClick={handleDismiss}
                  className="flex-shrink-0 p-1 rounded-full hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center"
                  aria-label="Fermer la bannière"
                >
                  <FiX className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Bottom border glow effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBanner;
