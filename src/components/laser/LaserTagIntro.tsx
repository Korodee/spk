"use client";

import { motion } from "framer-motion";

const LaserTagIntro = () => {
  return (
    <div className="bg-[#000428] relative overflow-hidden py-20 md:py-32 px-4">
      {/* Animated laser beams */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
        <motion.div
          className="absolute h-1 bg-cyan-400/70 w-1/2"
          style={{ top: "20%", right: "-50%" }}
          animate={{ right: ["-50%", "150%"] }}
          transition={{ duration: 8, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute h-0.5 bg-pink-500/70 w-1/3"
          style={{ top: "40%", left: "-50%" }}
          animate={{ left: ["-50%", "150%"] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute h-1 bg-purple-500/70 w-1/4"
          style={{ top: "70%", right: "-50%" }}
          animate={{ right: ["-50%", "150%"] }}
          transition={{ duration: 6, repeat: Infinity, delay: 4 }}
        />
      </div>

      {/* Central glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-96 h-96 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto p-8 md:p-12 border border-cyan-400/30 rounded-3xl bg-black/30 backdrop-blur-lg shadow-[0_0_30px_rgba(0,255,255,0.2)]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute -inset-1 rounded-3xl border-2 border-pink-500/50 blur-md animate-pulse-slow opacity-30" />
        <p
          className="text-center text-xl md:text-3xl text-white font-light leading-relaxed"
          style={{ textShadow: "0 0 0px #0ff, 0 0 20px #0ff" }}
        >
          Le laser tag s&apos;adresse aux personnes de tous les âges, à partir
          de 5 ans. Alors, en famille ou entre amis, affrontez vos adversaires
          dans ce jeu d&apos;action et de poursuite qui allie stratégie et
          activité physique.
        </p>
      </motion.div>
    </div>
  );
};

export default LaserTagIntro;
