"use client";

import { motion, Variants } from "framer-motion";
import { FiCheck, FiStar, FiAward } from "react-icons/fi";

const vipData = {
  vipCard: {
    title: "Carte V.I.P Karting",
    price: "170",
    features: [
      "5 courses de 15 min",
      "24$ + Tx pour le reste de la saison",
      "Possibilité de joindre une ligue.",
    ],
    icon: FiStar,
  },
  league: {
    title: "Ligue de Karting",
    subtitle: "Viens avec ta gang!",
    price: "5 semaines, 1 fois semaine",
    features: [
      "Qualification de 5 minutes",
      "Course de 12 minutes",
      "Système de pointage cumulatif",
      "Chronométrage professionnel",
      "Départ lancé (type Nascar)",
    ],
    note: "*Condition: chaque coureur se doit d'acheter la carte V.I.P.",
    icon: FiAward,
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const VipLigueSection = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* VIP Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-gradient-to-br from-yellow-900/20 via-black to-black border border-yellow-500/30 rounded-2xl p-8 flex flex-col"
          >
            <div className="flex-grow">
              <div className="flex items-center gap-4 mb-6">
                <vipData.vipCard.icon className="text-yellow-400 text-3xl" />
                <h3 className="font-bold text-3xl text-yellow-400">
                  {vipData.vipCard.title}
                </h3>
              </div>
              <div className="my-8">
                <span className="text-7xl font-black text-white">
                  ${vipData.vipCard.price}
                </span>
                <span className="text-xl text-gray-400"> + taxes</span>
              </div>
              <ul className="space-y-4">
                {vipData.vipCard.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FiCheck className="text-yellow-400" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="tel:418-693-3334">
              <motion.button
                className="w-full mt-8 py-3 rounded-lg font-bold uppercase tracking-widest bg-yellow-500 hover:bg-yellow-400 text-black"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Réserver
              </motion.button>
            </a>
          </motion.div>

          {/* League Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-gradient-to-br from-gray-900 via-black to-black border border-gray-500/30 rounded-2xl p-8 flex flex-col"
          >
            <div className="flex-grow">
              <div className="flex items-center gap-4 mb-4">
                <vipData.league.icon className="text-gray-300 text-3xl" />
                <h3 className="font-bold text-3xl text-white">
                  {vipData.league.title}
                </h3>
              </div>
              <p className="text-center font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400 mb-4">
                {vipData.league.subtitle}
              </p>
              <p className="text-center font-semibold text-lg text-gray-400 mb-4">
                {vipData.league.price}
              </p>

              <ul className="space-y-4">
                {vipData.league.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FiCheck className="text-gray-400" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-gray-500 text-center mt-4">
              {vipData.league.note}
            </p>
            <a href="tel:418-693-3334">
              <motion.button
                className="w-full mt-8 py-3 rounded-lg font-bold uppercase tracking-widest bg-white hover:bg-gray-200 text-black"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Réserver
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VipLigueSection;
