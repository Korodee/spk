"use client";

import { motion } from "framer-motion";

const InfoBox = ({ text }: { text: string }) => {
  return (
    <div className="bg-black py-12 px-6">
      <motion.div
        className="max-w-4xl mx-auto bg-gray-800/20 border border-gray-700 rounded-2xl p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-lg md:text-xl text-gray-300 leading-relaxed">
          {text}
        </p>
      </motion.div>
    </div>
  );
};

export default InfoBox;
