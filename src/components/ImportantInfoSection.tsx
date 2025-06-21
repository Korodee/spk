"use client";

import { motion, Variants } from "framer-motion";
import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const infoContent = [
  "Nous sommes toujours ouverts les jours fériés (St-Jean, fête du Canada, fête du travail, etc.) Sauf 25 décembre et 1er Janvier.",
  "Possibilité de fermer plus tôt les journées d'achalandage moindre.",
  "Lorsque nos heures sont écourtées nous sommes disposés à ouvrir sur réservation, en dehors de nos heures d'ouverture, selon un certain nombre de participants.",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const ImportantInfoSection = () => {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div
        aria-hidden="true"
        className="absolute inset-0 top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <FiAlertTriangle className="text-yellow-400 text-6xl" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-white mb-12 font-[family-name:var(--font-montserrat)]"
          >
            Informations Importantes
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="space-y-8 text-lg md:text-xl text-gray-300"
          >
            {infoContent.map((text, i) => (
              <motion.p key={i} variants={itemVariants}>
                {text}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImportantInfoSection;
