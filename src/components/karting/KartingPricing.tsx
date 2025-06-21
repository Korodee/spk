"use client";

import { motion, Variants } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const pricingData = {
  regular: [
    {
      name: "Prix Réduit",
      price: "26",
      features: [
        "15 Minutes",
        "15 minutes (2e course): 26,00$ + tx",
        "15 ans et moins",
      ],
      color: "red",
    },
    {
      name: "Régulier",
      price: "36",
      features: [
        "15 Minutes",
        "15 minutes (2e course): 26,00$ + tx",
        "16 ans et plus",
      ],
      color: "red",
    },
  ],
  grandPrix: [
    {
      name: "Mini Grand Prix",
      price: "64",
      features: [
        "5 Minutes de qualification",
        "10 Minutes de course",
        "10 Minutes de Finale",
        "10 personnes et plus",
      ],
      color: "gray",
    },
    {
      name: "Grand Prix",
      price: "69",
      features: [
        "5 Minutes de qualification",
        "10 Minutes de course",
        "15 Minutes de Finale",
        "10 personnes et plus",
      ],
      color: "gray",
    },
  ],
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

interface PricingCardProps {
  card: {
    name: string;
    price: string;
    features: string[];
  };
  index: number;
  color: "red" | "gray";
}

const PricingCard = ({ card, index, color }: PricingCardProps) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ staggerChildren: 0.1, delayChildren: index * 0.2 }}
    className={`relative border rounded-2xl p-8 flex flex-col h-full
      ${
        color === "red"
          ? "border-red-500/30 bg-red-900/10"
          : "border-gray-500/30 bg-gray-900/10"
      }
    `}
  >
    <div className="flex-grow">
      <h3
        className={`font-bold text-2xl uppercase tracking-wider ${
          color === "red" ? "text-red-400" : "text-gray-300"
        }`}
      >
        {card.name}
      </h3>
      <div className="my-8">
        <span className="text-6xl font-black text-white">${card.price}</span>
        <span className="text-xl text-gray-400"> + taxes</span>
      </div>
      <ul className="space-y-4">
        {card.features.map((feature: string, i: number) => (
          <li key={i} className="flex items-center gap-3">
            <FiCheck
              className={`${
                color === "red" ? "text-red-400" : "text-gray-300"
              }`}
            />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <motion.button
      className={`w-full mt-8 py-3 rounded-lg font-bold uppercase tracking-widest
        ${
          color === "red"
            ? "bg-red-600 hover:bg-red-500 text-white"
            : "bg-white hover:bg-gray-200 text-black"
        }
      `}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      Réserver
    </motion.button>
  </motion.div>
);

const KartingPricing = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter -skew-x-12 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            Nos Tarifs
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingData.regular.map((card, i) => (
            <PricingCard key={card.name} card={card} index={i} color="red" />
          ))}
          {pricingData.grandPrix.map((card, i) => (
            <PricingCard
              key={card.name}
              card={card}
              index={i + 2}
              color="gray"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KartingPricing;
