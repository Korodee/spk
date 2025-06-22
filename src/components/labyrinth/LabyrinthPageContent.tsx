"use client";

import { FiAward, FiLock, FiPenTool, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";
import LabyrinthSlider from "./ImageSlider";
import FinalCTASection from "./FinalCTASection";

const features = [
  {
    icon: FiPenTool,
    title: "Concept et design du labyrinthe",
    description:
      "Le labyrinthe de notre entreprise offre une expérience immersive avec des allées sinueuses, des passages secrets et des décors thématiques captivants.",
  },
  {
    icon: FiLock,
    title: "Les huit salles cachées et leurs défis",
    description:
      "Le labyrinthe propose huit salles cachées offrant une variété de défis, tels que des énigmes, des jeux d'adresse et des tâches interactives.",
  },
  {
    icon: FiTrendingUp,
    title: "Niveau de difficulté et accessibilité",
    description:
      "Le labyrinthe est semi-difficile, offrant un défi adapté à tous les participants, avec des options pour ajuster la difficulté selon les préférences individuelles.",
  },
  {
    icon: FiAward,
    title: "Expérience globale et avantages",
    description:
      "Le labyrinthe crée une expérience divertissante et éducative, renforçant les compétences cognitives, favorisant le travail d'équipe et stimulant la créativité.",
  },
];

const LabyrinthPageContent = () => {
  return (
    <div className="py-10">
      <motion.div
        className="max-w-5xl mx-auto my-16 p-10 bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className="text-center text-xl md:text-2xl font-semibold text-white">
          Venez seul ou en groupe affronter: « Le CUBE » !
        </p>
        <p className="text-center text-lg md:text-xl text-gray-300 mt-4 leading-relaxed">
          Parcourez notre labyrinthe de 6500 pieds carrés afin de rechercher et
          résoudre les énigmes, puis passez à la salle des coffres en un temps
          record.
        </p>
      </motion.div>
      <motion.h1
        className="text-5xl md:text-6xl font-black text-center text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Labyrinthe
      </motion.h1>

      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-md transition-colors hover:bg-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <feature.icon className="text-orange-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-center text-orange-400 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-center">{feature.description}</p>
          </motion.div>
        ))}
      </div>
      <LabyrinthSlider />
      <FinalCTASection />
    </div>
  );
};

export default LabyrinthPageContent;
