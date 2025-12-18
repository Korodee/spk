"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const animatedTexts = ["Des activités amusantes", "Et abordables!"];

export default function InfoBar() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % animatedTexts.length
      );
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-6 md:gap-x-0">
          {/* Left Section */}
          <div className="w-full md:w-1/3 text-center">
            <p className="text-xs uppercase tracking-wider text-gray-400">
              Peu importe la météo
            </p>
            <p className="mt-1 text-base font-bold text-white uppercase">
              Ouvert en tout temps
            </p>
          </div>

          <div className="w-full h-px md:w-px md:h-12 bg-white/10" />

          {/* Middle Section */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Link href="/activities" className="cursor-pointer">
              <div className="bg-white/5 hover:bg-white/10 transition-colors px-4 py-2 rounded-lg flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTextIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 250,
                      damping: 25,
                    }}
                    className="text-white text-sm font-medium text-center w-48"
                  >
                    {animatedTexts[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </Link>
          </div>

          <div className="w-full h-px md:w-px md:h-12 bg-white/10" />

          {/* Right Section */}
          <div className="w-full md:w-1/3 text-center">
            <p className="text-xs uppercase tracking-wider text-gray-400">
              Période Actuelle
            </p>
            <p className="mt-1 text-2xl font-black text-yellow-400 tracking-tighter">
              HIVER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
