"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const FRAME_COUNT = 60;
const FRAME_PATH = (i: number) => `/sportzio/stadium/${i + 1}.png`;

const TEXTS = [
  {
    start: 0,
    end: 17,
    text: "Play to earn, right from your seat. Watch the rewards stack up as your answers go live.",
  },
  {
    start: 18,
    end: 37,
    text: "Compete with others in real time. Every correct answer brings you closer to the top off the!",
  },
  {
    start: 38,
    end: 59,
    text: "Claim your prizes instantly and celebrate your victory with the crowd your prizes instantly!",
  },
];

function getTextForFrame(frame: number) {
  const found = TEXTS.find(({ start, end }) => frame >= start && frame <= end);
  return found ? found.text : "";
}

export default function StadiumParallax() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const totalScroll = rect.height - windowHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), totalScroll);
        const progress = totalScroll > 0 ? scrolled / totalScroll : 0;
        const frame = Math.floor(progress * (FRAME_COUNT - 1));
        setCurrentFrame(Math.min(Math.max(frame, 0), FRAME_COUNT - 1));
      } else if (rect.top > 0) {
        setCurrentFrame(0);
      } else if (rect.bottom < windowHeight) {
        setCurrentFrame(FRAME_COUNT - 1);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sideText = getTextForFrame(currentFrame);

  return (
    <div ref={containerRef} style={{ height: `${FRAME_COUNT * 10}vh` }}>
      <section
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        style={{ zIndex: 10 }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-200 h-200">
            {Array.from({ length: FRAME_COUNT }).map((_, i) => (
              <Image
                key={i}
                src={FRAME_PATH(i)}
                alt={`Sportzio Frame ${i + 1}`}
                fill
                className={`absolute inset-0 w-full h-full object-cover ${
                  i === currentFrame ? "opacity-100" : "opacity-0"
                }`}
                style={{ zIndex: i + 1 }}
                priority={i === 0}
              />
            ))}
            {sideText && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={sideText}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.15, ease: "easeInOut" }}
                  className="absolute top-80 -right-60 m-8 text-white text-right text-md font-medium max-w-[250px] leading-snug z-50 pointer-events-none"
                >
                  {sideText}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
