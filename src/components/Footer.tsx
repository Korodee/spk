"use client";

import { motion, Variants } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const GlitchLogo = () => {
  const [text, setText] = useState("SPK");
  const originalText = "SPK";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const handleMouseOver = () => {
      let iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        setText(
          originalText
            .split("")
            .map((_letter, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= originalText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 50);
    };

    const logoElement = document.getElementById("glitch-logo");
    if (logoElement) {
      logoElement.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      if (logoElement) {
        logoElement.removeEventListener("mouseover", handleMouseOver);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <h1
      id="glitch-logo"
      className="text-5xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500 cursor-pointer"
      onMouseOver={() => {}}
    >
      {text}
    </h1>
  );
};

const Footer = () => {
  return (
    <footer className="relative py-20 sm:py-28 bg-black">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-70"></div>
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-8">
          <GlitchLogo />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-lg text-gray-300">2175 Bd Saint-Paul</p>
          <p className="text-lg text-gray-300">info@spk.com | 418-693-3334</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-10"
        >
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaTwitter size={28} />
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 pt-8"
        >
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SPK Entertainment. All Rights
            Reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
