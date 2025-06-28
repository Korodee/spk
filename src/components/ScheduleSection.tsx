"use client";

import React from "react";
import { motion } from "framer-motion";

const scheduleData = [
  { day: "Lundi", open: "9", close: "22", icon: "🌙" },
  { day: "Mardi", open: "9", close: "22", icon: "🌙" },
  { day: "Mercredi", open: "9", close: "22", icon: "🌅" },
  { day: "Jeudi", open: "9", close: "22", icon: "🌅 " },
  { day: "Vendredi", open: "9", close: "22", icon: "🌅" },
  { day: "Samedi", open: "9", close: "22", icon: "⭐" },
  { day: "Dimanche", open: "9", close: "22", icon: "⭐" },
];

const ScheduleSection = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <span className="mx-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Horaires d&apos;ouverture
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-black text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Nos{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Horaires
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Planifiez votre visite selon nos heures d&apos;ouverture
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {scheduleData.map((item, index) => (
            <motion.div
              key={item.day}
              className="group relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between px-8 py-6 hover:bg-white/5 transition-all duration-300 relative">
                {/* Day with icon */}
                <div className="flex items-center gap-3">
                  <motion.span
                    className="text-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    {item.icon}
                  </motion.span>
                  <div className="text-lg font-semibold text-white group-hover:text-blue-100 transition-colors duration-300">
                    {item.day}
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-4">
                  {item.open === "FERMÉ" ? (
                    <motion.span
                      className="text-red-400 font-medium px-3 py-1 rounded-full bg-red-400/10 border border-red-400/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.open}
                    </motion.span>
                  ) : (
                    <>
                      <motion.span
                        className="text-slate-300 group-hover:text-white transition-colors duration-300 font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.open}
                      </motion.span>
                      <motion.div
                        className="w-1 h-1 bg-slate-500 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.span
                        className="text-slate-300 group-hover:text-white transition-colors duration-300 font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.close}
                      </motion.span>
                    </>
                  )}
                </div>

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </div>

              {index < scheduleData.length - 1 && (
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom info */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-sm">
            <span className="text-blue-400 font-medium">💡</span> Réservations
            recommandées pour les groupes
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
