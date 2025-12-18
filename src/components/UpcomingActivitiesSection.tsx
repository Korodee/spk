"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

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
    name: "PETITES QUILLES",
    status: "Disponible maintenant",
    gradient: "from-blue-900/20 to-cyan-900/20",
    border: "border-blue-500/30",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    name: "KARTING D'HIVER",
    status: "En préparation",
    gradient: "from-green-900/20 to-emerald-900/20",
    border: "border-green-500/30",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400",
  },
  {
    name: "ACTIVE ZONE",
    status: "Bientôt disponible",
    gradient: "from-orange-900/20 to-red-900/20",
    border: "border-orange-500/30",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400",
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
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
          className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/hub-de-jeux">
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full uppercase tracking-wider hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Découvrir les nouveautés
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>
          <a href="tel:418-693-3334">
            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-purple-500 text-white font-bold rounded-full uppercase tracking-wider hover:bg-purple-500/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nous contacter
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingActivitiesSection; 