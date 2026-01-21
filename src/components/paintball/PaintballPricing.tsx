"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { FaPaintBrush } from "react-icons/fa";
import { BookingButton } from "@/components/BookingButton";

const PaintballPricing = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-black uppercase tracking-tighter text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          NOS TARIFS
        </motion.h2>

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-32 h-1 bg-blue-500 rounded-full mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        <div className="mt-16 max-w-4xl mx-auto p-8 bg-gray-800/20 border border-gray-700 rounded-2xl shadow-2xl">
          <h3 className="text-3xl font-bold uppercase text-center text-blue-300 tracking-wider">
            Forfait Activité Demi-Journée
          </h3>
          <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto">
            Ce forfait activité inclut 4h de jeu Painball, l&apos;équipement de
            base, 100 balles de départ et l&apos;accès aux 9 terrains extérieurs.
            Un moniteur fera office d&apos;arbitre sur les terrains et
            l&apos;eau courante est disponible à chaque terrain.
            L&apos;équipement de base comprend : Habit de camouflage, masque de
            protection facial, marqueurs semi-automatique, N2 (air comprimé) à
            volonté et 100 balles de départ.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
          {/* Carte prix */}
          <motion.div
            className="lg:col-span-1 bg-gradient-to-br from-green-600/30 to-green-800/20 border border-green-500/40 rounded-2xl p-8 text-center flex flex-col justify-between"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <div className="flex justify-center items-center w-24 h-24 mx-auto mb-4 bg-green-500/20 rounded-full">
                <FaPaintBrush className="text-5xl text-green-300" />
              </div>
              <p className="font-bold text-xl">1/2 JOURNÉE</p>
              <p className="text-7xl font-black my-2">
                39<span className="text-5xl">$</span>
              </p>
              <p className="text-gray-400">+ TAXES</p>
            </div>

            <BookingButton
              aria-label="Réserver paintball demi-journée"
              className="w-full mt-6 py-3 bg-white text-black font-bold rounded-lg uppercase tracking-widest text-center block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Réserver
            </BookingButton>
          </motion.div>

          {/* Options + combo */}
          <motion.div
            className="lg:col-span-2 bg-gray-800/20 border border-gray-700 rounded-2xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h4 className="text-2xl font-bold text-gray-300">En Option:</h4>
            <ul className="text-lg space-y-3 mt-4 text-gray-200">
              <li className="flex items-center gap-2">
                <FiCheck className="text-green-400" />
                100 balles: 12.50$ + taxes
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-green-400" />
                500 balles: 57.50$ + taxes
              </li>
            </ul>

            <div className="mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
              <div>
                <h4 className="text-2xl font-bold">Combo Paintball / Karting</h4>
              </div>
              <div className="text-right">
                <p className="text-5xl font-black">
                  62<span className="text-3xl">$</span>
                </p>
                <p className="text-gray-400">+ TAXES</p>
              </div>
            </div>

            <BookingButton
              aria-label="Réserver combo paintball karting"
              className="w-full mt-6 py-3 bg-white text-black font-bold rounded-lg uppercase tracking-widest text-center block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Réserver
            </BookingButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PaintballPricing;
