"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FiClock, FiShield, FiZap } from "react-icons/fi";
import { IoShirtOutline } from "react-icons/io5";
import { useRef } from "react";

const recommendationItems = [
  {
    icon: IoShirtOutline,
    text: "Portez des vêtements sombres et confortables pour une meilleure immersion.",
  },
  {
    icon: FiZap,
    text: "Des chaussures de sport sont essentielles pour une agilité maximale.",
  },
  {
    icon: FiClock,
    text: "Les parties sont lancées toutes les 20 minutes, soyez à l'heure !",
  },
  {
    icon: FiShield,
    text: "Profitez de la pause de 20 minutes entre les parties pour recharger vos batteries.",
  },
];

const Recommendations = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], ["-100%", "50%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  const title = "Recommandations";
  const titleChars = Array.from(title);

  return (
    <div
      ref={targetRef}
      className="bg-gradient-to-b from-[#0a011a] to-[#000428] relative overflow-hidden py-32 px-4"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute -right-1/4 -top-1/4 w-1/2 h-full"
          style={{ x: imageX, scale: imageScale }}
        >
          <Image
            src="/reccomendation.png"
            alt="Laser tag equipment"
            layout="fill"
            objectFit="contain"
            className="opacity-40"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="md:col-span-1">
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-8">
            {titleChars.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 + index * 0.05,
                  ease: "easeOut",
                }}
                className="inline-block"
                style={{ textShadow: "0 0 15px rgba(255,255,255,0.3)" }}
              >
                {char === " " ? "\\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          <ul className="space-y-6">
            {recommendationItems.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.4 + index * 0.2,
                  ease: "easeOut",
                }}
              >
                <div className="p-3 bg-cyan-400/10 border border-cyan-400/30 rounded-lg">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-lg text-gray-200">{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
