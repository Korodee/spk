"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const FRAME_COUNT = 60;
const FRAME_PATH = (i: number) => `/sportzio/${i + 1}.png`;

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

export default function Sportzio() {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / scrollHeight;
      const frame = Math.floor(scrollProgress * (FRAME_COUNT - 1));
      setCurrentFrame(Math.min(Math.max(frame, 0), FRAME_COUNT - 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sideText = getTextForFrame(currentFrame);

  return (
    <div className="relative w-full min-h-screen bg-black">
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
      <div style={{ height: `600vh` }} />
    </div>
  );
}
