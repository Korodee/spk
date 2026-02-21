"use client";
import { motion, Variants } from "framer-motion";
import React from "react";
import Link from "next/link";
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
    category: "Mini-golf fluo",
    image: "/golf.jpg",
    items: [
      { name: "Adulte", price: "15.50$" },
      { name: "Enfant (15 ans et moins)", price: "10$" },
    ],
  },
  {
    category: "Réalité Virtuelle",
    image: "/virtual-real.jpg",
    items: [
      { name: "Régulière", price: "7$" },
      { name: "Horreur", price: "9$" },
      { name: "360", price: "12$" },
    ],
  },
  {
    category: "Karting",
    image: "/karting.jpg",
    items: [
      { name: "Adulte", price: "36$/15 min" },
      { name: "Enfant (15 ans et moins)", price: "26$/15 min" },
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
    category: "Quilles",
    image: "/bowling.jpg",
    items: [
      {
        name: "Allée de petites quilles (1 heure)",
        price: "30$",
        description: "+ 2$ bas antidérapant par personne",
      },
    ],
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
      { name: "Salle A / B / C (sans activité)", price: "70$/h" },
      {
        name: "Salle pour soirée (A & B)",
        price: "500$",
        description: "17h à 01h00, possibilité de service de bar",
      },
    ],
  },
  {
    category: "Arcade",
    image: "/arcade.jpg",
    items: [
      {
        name: "Accès libre à l'arcade",
        price: "Voir sur place",
        description: "Tarifs variables selon les jeux et promotions en cours",
      },
    ],
  },
  {
    category: "Active Zone",
    image: "/active-zone.jpg",
    items: [
      {
        name: "Accès Active Zone",
        price: "Voir sur place",
        description:
          "Tarifs et formules disponibles à la réception selon les jeux choisis",
      },
    ],
  },
];

// Mapping of category names to activity slugs
const categoryToSlug: { [key: string]: string } = {
  "Laser tag": "jeu-laser",
  "Mini-golf fluo": "minigolf",
  "Réalité Virtuelle": "realite-virtuelle",
  Karting: "karting",
  Paintball: "paintball",
  LABYRINTHE: "labyrinth",
  "Salle Arcade VIP": "salle-arcade-vip",
};

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
      <div className="relative text-center min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 w-full h-full bg-black/70"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-30 blur-lg"
          animate={{
            y: [0, 15, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-25 blur-md"
          animate={{
            y: [0, -10, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Main Content */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Animated Title */}
          <motion.div
            className="relative mb-8"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500 mb-4 font-[family-name:var(--font-montserrat)]">
              Nos Tarifs
            </h1>

            {/* Animated Underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-orange-400 via-purple-500 to-cyan-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Floating Price Cards */}
          {/* (Removed as per user request) */}

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-[80%] md:max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Choisissez votre aventure. Des tarifs pour tous les goûts et tous
            les âges.
          </motion.p>

          {/* Animated Badge */}
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="inline-block bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium">
              (Prix unitaires avant taxes)
            </span>
          </motion.div>
        </motion.div>
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
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
              {category.category === "Mini-golf fluo" && (
                <motion.div
                  className="max-w-3xl mx-auto mb-10"
                  variants={cardVariants}
                >
                  <div className="bg-gradient-to-r from-red-700/90 via-orange-600/90 to-red-700/90 border border-red-300/80 rounded-2xl px-6 py-4 text-center shadow-xl">
                    <p className="text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-red-100 mb-2">
                      Information importante
                    </p>
                    <p className="text-sm md:text-base text-red-50">
                      Réouverture en mars. Le minigolf sera
                      complètement démoli pour laisser la place à un tout
                      nouveau minigolf interactif avec une nouvelle
                      thématique. Réouverture prévue en mars. Suivez-nous sur les réseaux pour en savoir
                      plus&nbsp;!
                    </p>
                  </div>
                </motion.div>
              )}
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

              {/* Découvrir Button */}
              {categoryToSlug[category.category] && (
                <motion.div
                  className="text-center mt-12"
                  variants={cardVariants}
                >
                  <Link href={`/activity/${categoryToSlug[category.category]}`}>
                    <button className="bg-purple-500 cursor-pointer hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-3xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Découvrir
                    </button>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
      {/* Add tax note at the bottom of the page */}
      <div className="mt-12 text-center">
        <span className="text-gray-400 text-sm">* tx non incluses</span>
      </div>
      <Footer />
    </div>
  );
};

export default TarifsPage;
