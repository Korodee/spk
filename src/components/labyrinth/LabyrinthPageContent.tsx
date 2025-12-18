"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FiPlay,
  FiUsers,
  FiClock,
  FiStar,
  FiArrowRight,
  FiX,
  FiTarget,
  FiZap,
} from "react-icons/fi";

const challenges = [
  {
    id: "challenge-1",
    name: "Labyrinthe",
    subtitle: "Défi Complet",
    description:
      "Parcourez notre labyrinthe de 6500 pieds carrés et résolvez les énigmes pour compléter votre mission en un temps record.",
    image: "/activite.jpg",
    features: [
      "6500 pieds carrés",
      "8 salles cachées",
      "Énigmes variées",
      "Temps record",
    ],
    difficulty: "Semi-difficile",
    duration: "30min - 2h",
    price: "11$",
    color: "from-orange-500 to-red-500",
  },
];

const features = [
  {
    icon: FiTarget,
    title: "8 Salles Cachées",
    description:
      "Découvrez huit salles secrètes avec des défis uniques, des énigmes et des jeux d'adresse interactifs.",
    color: "from-orange-400 to-red-500",
  },
  {
    icon: FiZap,
    title: "Énigmes Variées",
    description:
      "Stimulez votre esprit avec une variété d'énigmes adaptées à tous les niveaux de difficulté.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: FiUsers,
    title: "Travail d'Équipe",
    description:
      "Renforcez vos compétences de collaboration et de communication en résolvant des défis ensemble.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: FiClock,
    title: "Temps Record",
    description:
      "Tentez de battre le record de temps pour compléter le labyrinthe.",
    color: "from-green-400 to-emerald-500",
  },
];

const LabyrinthPageContent = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openChallengeDetails = (challengeId: string) => {
    setSelectedChallenge(challengeId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedChallenge(null), 300);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-red-900/20" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-20 blur-2xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-30 blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Glitch Title Effect */}
            <div className="relative mb-8">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 mb-4">
                Le LABYRINTHE
              </h1>
              <motion.div
                className="absolute inset-0 text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-400"
                animate={{
                  x: [0, -2, 2, 0],
                  opacity: [1, 0.8, 0.9, 1],
                }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                Le LABYRINTHE
              </motion.div>
            </div>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Venez seul ou en groupe affronter notre labyrinthe et résolvez les énigmes pour réussir votre mission.
            </motion.p>

            {/* Start Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="tel:418-693-3334">
                <motion.button
                  className="group relative px-12 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white font-bold text-lg uppercase tracking-wider shadow-2xl"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(255, 69, 0, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative text-sm z-10 flex items-center gap-2">
                    <FiPlay className="text-xl" />
                    Commencer l&apos;aventure
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">SCROLL</p>
            <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center mx-auto">
              <motion.div
                className="w-1 h-3 bg-orange-500 rounded-full mt-2"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Challenge Selection Section */}
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Choisissez
              </span>{" "}
              votre défi
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Un défi unique pour tester vos compétences et votre esprit d&apos;équipe.
            </p>
          </motion.div>

          {/* Challenge Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <motion.div
                  className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(255, 69, 0, 0.3)",
                  }}
                  onClick={() => openChallengeDetails(challenge.id)}
                >
                  {/* Challenge Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={challenge.image}
                      alt={challenge.name}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Challenge Badge */}
                    <div className="absolute top-4 left-4">
                      <div
                        className={`px-4 py-2 rounded-full bg-gradient-to-r ${challenge.color} text-white font-bold text-sm`}
                      >
                        {challenge.price}
                      </div>
                    </div>

                    {/* Difficulty Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                        {challenge.difficulty}
                      </div>
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                        <FiPlay className="text-white text-2xl ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Challenge Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">
                      {challenge.name}
                    </h3>
                    <p className="text-orange-400 font-semibold mb-3">
                      {challenge.subtitle}
                    </p>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {challenge.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {challenge.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <FiClock className="text-orange-400" />
                      <span>{challenge.duration}</span>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className="w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Voir détails
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Caractéristiques
              </span>{" "}
              du labyrinthe
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <motion.div
                  className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center"
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(255, 69, 0, 0.2)",
                  }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenge Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedChallenge && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            <motion.div
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <FiX className="text-xl" />
              </button>

              {/* Modal Content */}
              <div className="p-6">
                {(() => {
                  const challenge = challenges.find(
                    (c) => c.id === selectedChallenge
                  );
                  if (!challenge) return null;

                  return (
                    <div>
                      {/* Header */}
                      <div className="text-center mb-8">
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">
                          {challenge.name}
                        </h2>
                        <p className="text-xl text-orange-400 font-semibold mb-4">
                          {challenge.subtitle}
                        </p>
                        <div
                          className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${challenge.color} text-white font-bold text-lg`}
                        >
                          {challenge.price}
                        </div>
                      </div>

                      {/* Image and Description */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
                          <Image
                            src={challenge.image}
                            alt={challenge.name}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-4">
                            Description
                          </h3>
                          <p className="text-gray-300 leading-relaxed mb-6">
                            {challenge.description}
                          </p>

                          <h4 className="text-xl font-bold mb-4">
                            Caractéristiques
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {challenge.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-3 text-gray-300"
                              >
                                <FiStar className="text-orange-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Booking CTA */}
                      <div className="text-center">
                        <a href="tel:418-693-3334">
                          <motion.button
                            className="px-12 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white font-bold text-lg uppercase tracking-wider shadow-2xl"
                            whileHover={{
                              scale: 1.05,
                              boxShadow: "0 0 30px rgba(255, 69, 0, 0.5)",
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Réserver cette expérience
                          </motion.button>
                        </a>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LabyrinthPageContent;
