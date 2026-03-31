"use client";

import { motion, Variants } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { BookingButton } from "@/components/BookingButton";

const pricingData = {
  regular: [
    {
      name: "Course régulière enfant",
      price: "26",
      subtitle: "+ taxes / personne",
      features: ["15 minutes", "9 ans à 15 ans", "Minimum 54 pouces"],
      color: "red",
    },
    {
      name: "Course régulière adulte",
      price: "36",
      subtitle: "+ taxes / personne",
      features: ["15 minutes", "16 ans et plus"],
      color: "red",
    },
    {
      name: "Course supplémentaire",
      price: "26",
      subtitle: "+ taxes / personne",
      features: ["15 minutes", "Applicable après une première course"],
      color: "red",
    },
    ],
  grandPrix: [
    {
      name: "Mini grand prix",
      price: "64",
      subtitle: "+ taxes / personne",
      features: [
        "25 minutes",
        "Bloc 1 : 5 min de qualification + 10 min course 1",
        "Bloc 2 : 10 min de course finale",
      ],
      color: "gray",
    },
    {
      name: "Grand prix",
      price: "69",
      subtitle: "+ taxes / personne",
      features: [
        "30 minutes",
        "Bloc 1 : 5 min de qualification + 10 min course 1",
        "Bloc 2 : 15 min de course finale",
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
    subtitle: string;
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
    className={`relative border rounded-2xl p-8 flex flex-col h-full ${
      color === "red"
        ? "border-red-500/30 bg-red-900/10"
        : "border-gray-500/30 bg-gray-900/10"
    }`}
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
        <p className="text-sm text-gray-400 mt-2">{card.subtitle}</p>
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

    <BookingButton
      aria-label={`Réserver karting - ${card.name}`}
      className={`w-full mt-8 py-3 rounded-lg font-bold uppercase tracking-widest text-center block ${
        color === "red"
          ? "bg-red-600 hover:bg-red-500 text-white"
          : "bg-white hover:bg-gray-200 text-black"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      Réserver
    </BookingButton>
  </motion.div>
);

const KartingPricing = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-400 uppercase tracking-wider mb-4">
            Section Karting
          </h2>
        </motion.div>

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
              index={i + pricingData.regular.length}
              color="gray"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KartingPricing;
