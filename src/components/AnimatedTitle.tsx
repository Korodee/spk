"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

const mainTitleVariant = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const charVariant: Variants = {
  initial: { opacity: 0, y: 30, skewX: -20 },
  animate: {
    opacity: 1,
    y: 0,
    skewX: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const AnimatedTitle = ({ text, className }: AnimatedTitleProps) => {
  const words = text.split(" ");

  return (
    <motion.h1
      className={`text-5xl md:text-7xl font-black uppercase tracking-tighter ${
        className ||
        "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 animate-gradient"
      }`}
      variants={mainTitleVariant}
      initial="initial"
      animate="animate"
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-4">
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              variants={charVariant}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
};

export default AnimatedTitle;
