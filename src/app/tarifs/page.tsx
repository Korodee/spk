"use client";
import { motion, Variants } from "framer-motion";
import React from "react";
import Footer from "@/components/Footer";

const ratesData = [
  {
    category: "Laser tag",
    image: "/laser-tag.jpg",
    items: [
      { name: "1ère partie", price: "11.50$" },
      { name: "2ème partie", price: "9.50$" },
      { name: "3ème partie", price: "7.50$" },
    ],
  },
  {
    category: "Minigolf",
    image: "/golf.jpg",
    items: [
      { name: "Adulte", price: "13.50$" },
      { name: "Enfant (15 ans et moins)", price: "10$" },
    ],
  },
  {
    category: "Réalité Virtuelle",
    image: "/virtual-real.jpg",
    items: [
      { name: "Régulière", price: "7$" },
      { name: "Horreur", price: "9$" },
      { name: "Zombie", price: "10$" },
      { name: "360", price: "12$" },
    ],
  },
  {
    category: "Karting",
    image: "/karting.jpg",
    items: [
      { name: "Adulte", price: "36$" },
      { name: "Enfant (15 ans et moins)", price: "26$" },
      { name: "Deuxième course", price: "26$" },
      { name: "Mini Grand Prix", price: "64$" },
      { name: "Karting Grand Prix", price: "69$" },
      { name: "Carte VIP", price: "170$" },
    ],
  },
  {
    category: "Paintball",
    image: "/paintball.jpg",
    items: [
      { name: "Paintball", price: "39$" },
      { name: "Combo Paintball Karting", price: "62$" },
    ],
  },
  {
    category: "LABYRINTHE",
    image: "/labyrinth.jpg",
    items: [{ name: "Labyrinthe", price: "11$" }],
  },
  {
    category: "Salle Arcade VIP",
    image: "/arcade.jpg",
    items: [
      {
        name: "Salle A / B / C",
        price: "60$/h",
        description: "Avec 50$ et + activités",
      },
      { name: "Salle A / B / C (sans activité)", price: "50$/h" },
      {
        name: "Salle pour soirée (A & B)",
        price: "450$",
        description: "17h à 01h00, avec service de bar",
      },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const TarifsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative text-center py-32 md:py-48 flex items-center justify-center">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/tariff-hero.jpg')" }}
        >
          <div className="absolute inset-0 w-full h-full bg-black/70"></div>
        </div>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500 mb-4 font-[family-name:var(--font-montserrat)]">
            Nos Tarifs
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Choisissez votre aventure. Des tarifs pour tous les goûts et tous
            les âges.
          </p>
          <br />
          <span className="text-sm text-gray-400 mt-2 block">
            (Prix unitaires avant taxes)
          </span>
        </motion.div>
      </div>

      <div className="relative z-10">
        {ratesData.map((category) => (
          <div key={category.category} className="relative py-20 md:py-32">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className="absolute inset-0 w-full h-full bg-black/70 backdrop-blur-[2px]"></div>
            </div>

            <motion.div
              className="relative max-w-7xl mx-auto px-6 lg:px-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-black text-white mb-12 text-center uppercase tracking-wider"
                variants={cardVariants}
              >
                {category.category}
              </motion.h2>
              <motion.div
                className="flex flex-wrap justify-center gap-6"
                variants={containerVariants}
              >
                {category.items.map((item) => (
                  <motion.div
                    key={item.name}
                    className="bg-black/40 backdrop-blur-lg p-6 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-2xl border border-white/10 group flex flex-col text-center"
                    variants={cardVariants}
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                      boxShadow: "0px 15px 30px rgba(99, 50, 200, 0.4)",
                    }}
                  >
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-gray-400 mb-4">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div className="mt-auto">
                      <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
                        {item.price}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default TarifsPage;
