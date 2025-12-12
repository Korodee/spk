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

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex items-center justify-center gap-3">
                {/* Icon/Emoji */}
                {/* <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="text-2xl"
                >
                  🎉
                </motion.div> */}

                {/* Text Content */}
                <div className="flex-1 text-center">
                  <p className="text-white flex items-center justify-center font-bold text-sm sm:text-base md:text-lg tracking-wide mb-2">
                    <span className="inline-block">
                      Nouveaux espaces ouverts ! Découvrez nos nouvelles
                      activités excitantes{" "}
                    </span>
                    <Link href="/hub-de-jeux">
                      <motion.button
                        className="inline-flex ml-2 items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Découvrir Hub de Jeux
                        <FiArrowRight className="text-sm" />
                      </motion.button>
                    </Link>
                  </p>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleDismiss}
                  className="flex-shrink-0 p-1 rounded-full hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Fermer la bannière"
                >
                  <FiX className="w-5 h-5 text-white" />
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
