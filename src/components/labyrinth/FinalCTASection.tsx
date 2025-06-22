"use client";

import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <div className="bg-black relative overflow-hidden py-24 px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-900/40 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Prêt à affronter le LABYRINTHE?
        </motion.h2>

        <motion.div
          className="inline-block"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative p-1 bg-gradient-to-br from-white/20 to-white/0 rounded-3xl">
            <div className="relative px-16 py-10 bg-black/40 backdrop-blur-xl rounded-[22px] border border-white/10 shadow-2xl">
              <div className="absolute left-10 top-1/2 -translate-y-1/2 w-20 h-20 bg-orange-500/80 rounded-2xl blur-lg -rotate-12 opacity-50"></div>
              <p className="relative text-orange-400 text-6xl font-bold tracking-tight">
                11${" "}
                <span className="text-5xl font-light opacity-80">+ taxes</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FinalCTASection;
