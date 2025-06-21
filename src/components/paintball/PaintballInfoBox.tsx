"use client";

import { motion } from "framer-motion";

interface PaintballInfoBoxProps {
  children: React.ReactNode;
}

const PaintballInfoBox = ({ children }: PaintballInfoBoxProps) => {
  return (
    <div className="bg-black mt-8 py-8 px-4">
      <motion.div
        className="max-w-5xl mx-auto bg-gradient-to-r from-green-800/60 to-green-600/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-green-500/30"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-white text-center text-lg leading-relaxed space-y-4">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default PaintballInfoBox;
