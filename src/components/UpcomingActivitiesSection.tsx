"use client";

import React from "react";
import { motion } from "framer-motion";

const newActivities = [
  {
    name: "ARCADE",
    status: "Maintenant ouverte",
    gradient: "from-purple-900/20 to-pink-900/20",
    border: "border-purple-500/30",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    name: "ESCAPE ROOM",
    status: "Disponible maintenant",
    gradient: "from-blue-900/20 to-cyan-900/20",
    border: "border-blue-500/30",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    name: "SIMULATEUR VR",
    status: "Nouveau",
    gradient: "from-green-900/20 to-emerald-900/20",
    border: "border-green-500/30",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400",
  },
  {
    name: "LASER MAZE",
    status: "Maintenant ouvert",
    gradient: "from-orange-900/20 to-red-900/20",
    border: "border-orange-500/30",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400",
  },
  {
    name: "ARÈNE COMBAT",
    status: "Disponible",
    gradient: "from-yellow-900/20 to-amber-900/20",
    border: "border-yellow-500/30",
    iconBg: "bg-yellow-500/20",
    iconColor: "text-yellow-400",
  },
  {
    name: "BOWLING",
    status: "Nouveau",
    gradient: "from-indigo-900/20 to-violet-900/20",
    border: "border-indigo-500/30",
    iconBg: "bg-indigo-500/20",
    iconColor: "text-indigo-400",
  },
];

const UpcomingActivitiesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Nouvelles
            </span>{" "}
            <span className="text-white">Activités</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos nouvelles activités maintenant disponibles ! Explorez nos nouveaux espaces 
            et vivez des expériences qui vont révolutionner votre divertissement.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {newActivities.map((activity, index) => (
            <motion.div
              key={activity.name}
              className={`relative bg-gradient-to-br ${activity.gradient} border ${activity.border} rounded-2xl p-8 h-64 flex items-center justify-center`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 ${activity.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <svg className={`w-8 h-8 ${activity.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{activity.name}</h3>
                <p className="text-gray-400 text-sm">{activity.status}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="tel:418-693-3334">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full uppercase tracking-wider hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nous contacter pour plus d&apos;infos
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingActivitiesSection; 