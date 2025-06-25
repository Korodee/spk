"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const FRAME_COUNT = 3;
const FRAME_PATH = (i: number) => `/sportzio/phone/${i + 1}.png`;

const TEXTS = [
  "Live chats across the venue, celebrate, taunt, and connect.",
  "Answer questions synched with the live match.",
  "Top the leaderboard and win rewards.",
];

export default function PhoneParallax() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [showText, setShowText] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScroll = rect.height - windowHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), totalScroll);
      const progress = totalScroll > 0 ? scrolled / totalScroll : 0;
      let frame = Math.floor(progress * (FRAME_COUNT - 1));
      if (progress > 0.8) {
        frame = FRAME_COUNT - 1;
      }
      setCurrentFrame(Math.min(Math.max(frame, 0), FRAME_COUNT - 1));
      // Show text only after scrolling 100vh into the section
      setShowText(scrolled > windowHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sideText = TEXTS[currentFrame];

  return (
    <div ref={containerRef} style={{ height: `500vh` }}>
      <section
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        style={{ zIndex: 10 }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="relative w-72 h-150">
              {Array.from({ length: FRAME_COUNT }).map((_, i) => (
                <Image
                  key={i}
                  src={FRAME_PATH(i)}
                  alt={`Phone Frame ${i + 1}`}
                  fill
                  className={`absolute inset-0 w-full h-full object-cover ${
                    i === currentFrame ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ zIndex: i + 1 }}
                  priority={i === 0}
                />
              ))}
            </div>
            <AnimatePresence mode="wait">
              {showText && sideText && (
                <motion.div
                  key={sideText}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="ml-8 bg-[#0a0d12] rounded-xl px-4 py-4 text-white text-md font-semibold max-w-[250px] shadow-xl pointer-events-none"
                >
                  {sideText}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
