"use client";

import React from "react";
import { FiAlertTriangle, FiClock, FiCalendar, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";

const infoContent = [
  {
    icon: FiCalendar,
    title: "Jours Fériés",
    text: "Nous sommes toujours ouverts les jours fériés (St-Jean, fête du Canada, fête du travail, etc.) Sauf 25 décembre et 1er Janvier.",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: FiClock,
    title: "Horaires Flexibles",
    text: "Possibilité de fermer plus tôt les journées d'achalandage moindre (selon le nombre de participants) et de faire des réservations privées.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FiUsers,
    title: "Réservations Privées",
    text: "Lorsque nos heures sont écourtées nous sommes disposés à ouvrir sur réservation, en dehors de nos heures d'ouverture, selon un certain nombre de participants.",
    color: "from-pink-500 to-orange-500",
  },
];

const ImportantInfoSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30px_30px,rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[length:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center shadow-lg">
                <FiAlertTriangle className="text-orange-600 text-3xl" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-black text-gray-900 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Informations
            </span>{" "}
            <span className="text-gray-700">Importantes</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Informations essentielles pour planifier votre visite et profiter
            pleinement de votre expérience
          </motion.p>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {infoContent.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <item.icon className="text-white text-2xl" />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {item.text}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d&apos;informations supplémentaires ?
            </h3>
            <p className="text-gray-600 mb-6">
              Notre équipe est là pour vous aider à planifier votre visite
              parfaite
            </p>
            <a href="tel:418-693-3334">
              <motion.button
                className="cursor-pointer bg-gradient-to-r from-purple-400 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Nous Contacter
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImportantInfoSection;
