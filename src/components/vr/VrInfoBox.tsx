"use client";

import { motion } from "framer-motion";

const VrInfoBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black py-12 px-4">
      <motion.div
        className="max-w-5xl mx-auto border border-gray-700 rounded-2xl p-8"
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

export default VrInfoBox;
