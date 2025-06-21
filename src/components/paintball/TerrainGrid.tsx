"use client";

import { motion, Variants } from "framer-motion";
import { IconType } from "react-icons";
import { FaMountain } from "react-icons/fa";
import {
  GiBunker,
  GiTreehouse,
  GiVillage,
  GiValley,
  GiHills,
  GiFunnel,
  GiForest,
} from "react-icons/gi";

interface Terrain {
  icon: IconType;
  title: string;
  description: string;
}

const terrains: Terrain[] = [
  {
    icon: GiBunker,
    title: "Les Bunkers",
    description: "Terrain très ouvert, plusieurs bunkers, cachettes et roc.",
  },
  {
    icon: GiTreehouse,
    title: "Le Mousseux",
    description:
      "Terrain grandeur moyenne avec un sous bois très fournis de très grandes plaines végétales. Un terrain pour les mordus des parties tactiques.",
  },
  {
    icon: FaMountain,
    title: "Camp SPK",
    description:
      "Un camp fortifié de 34 maisonnettes avec une tour centrale avec une vue imprenable.",
  },
  {
    icon: GiVillage,
    title: "Le Village",
    description:
      "Terrain reproduisant un petit village avec une église, une ambassade et plusieurs petits bâtiments. Excellent pour tout type de simulation.",
  },
  {
    icon: GiValley,
    title: "La Vallée",
    description:
      "Immense terrain avec une vallée au milieu accompagné d'une cascade et d'un ruisseau qui le traverse. 60 pieds de dénivellation.",
  },
  {
    icon: GiHills,
    title: "La Pente",
    description: "Terrain court idéal pour les petits groupes.",
  },
  {
    icon: GiFunnel,
    title: "L'Entonnoir",
    description: "Terrain en forme d'entonnoir propice aux embuscades.",
  },
  {
    icon: GiForest,
    title: "Le Silencieux",
    description:
      "Terrain grandeur moyenne avec un sous bois très fournis. Un terrain pour les mordus des parties tactiques.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const TerrainGrid = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-black uppercase tracking-tighter text-center mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Les Terrains
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {terrains.map((terrain, index) => (
            <motion.div
              key={terrain.title}
              className="bg-gradient-to-b from-gray-900 to-black border border-gray-700 rounded-2xl p-6 text-center flex flex-col items-center h-full"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-green-400/20 p-5 rounded-2xl mb-6 inline-block">
                <terrain.icon className="text-6xl text-lime-300" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">
                {terrain.title}
              </h3>
              <p className="text-gray-400 text-sm flex-grow">
                {terrain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TerrainGrid;
