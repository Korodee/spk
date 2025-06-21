"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

const scheduleData = [
  { day: "Lundi", open: "FERMÉ", close: "" },
  { day: "Mardi", open: "FERMÉ", close: "" },
  { day: "Mercredi", open: "12 PM", close: "10 PM" },
  { day: "Jeudi", open: "12 PM", close: "10 PM" },
  { day: "Vendredi", open: "12 PM", close: "10 PM" },
  { day: "Samedi", open: "9 AM", close: "10 PM" },
  { day: "Dimanche", open: "9 AM", close: "5 PM" },
];

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const ScheduleSection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white text-center mb-16 font-[family-name:var(--font-montserrat)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
            Nos Horaires
          </span>
        </motion.h2>

        <motion.div
          className="flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {scheduleData.map((item, i) => (
            <motion.div
              key={item.day}
              variants={rowVariants}
              custom={i}
              className="group"
            >
              <div className="flex items-center md:px-40 text-2xl md:text-4xl font-black uppercase tracking-tighter py-4 transition-colors duration-300">
                <div className="w-1/3 text-white">{item.day}</div>
                <div className="flex-1 flex justify-end text-center items-center gap-8">
                  {item.open === "FERMÉ" ? (
                    <span className="text-red-500">{item.open}</span>
                  ) : (
                    <>
                      <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                        {item.open}
                      </span>
                      <span className="text-gray-600 items-center justify-center text-xl">
                        -----
                      </span>
                      <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                        {item.close}
                      </span>
                    </>
                  )}
                </div>
              </div>
              {i < scheduleData.length - 1 && (
                <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent group-hover:via-orange-400 transition-colors duration-500" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
