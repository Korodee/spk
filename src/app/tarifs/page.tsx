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
      { name: "1ère partie", price: "11.50$ + taxes / personne" },
      { name: "2ème partie", price: "9.50$ + taxes / personne" },
      { name: "Parties supplémentaires", price: "7.50$ + taxes / personne" },
    ],
    notes: [
      "Apportez des vêtements de sport et des espadrilles.",
      "Après la 2e partie, les parties supplémentaires reviennent à 7.50$ + taxes / personne.",
      "Tous les prix sont par personne.",
    ],
  },
  {
    category: "Mini-golf fluo",
    image: "/golf.jpg",
    items: [
      { name: "Adulte", price: "15.50$ + taxes / personne" },
      { name: "Enfant (15 ans et moins)", price: "13$ + taxes / personne" },
    ],
    notes: ["Prix par personne."],
  },
  {
    category: "Réalité Virtuelle",
    image: "/virtual-real.jpg",
    items: [
      { name: "Régulière", price: "7$ + taxes / partie" },
      { name: "Horreur", price: "9$ + taxes / partie" },
      { name: "Zombie", price: "10$ + taxes / partie / personne" },
      { name: "Chaise 360", price: "12$ + taxes / partie" },
    ],
    notes: ["Chaise 360 : maximum 250 lbs."],
  },
  {
    category: "Karting",
    image: "/karting.jpg",
    items: [
      {
        name: "Course régulière adulte (15 min)",
        price: "36$ + taxes / personne",
      },
      {
        name: "Course supplémentaire adulte (15 min)",
        price: "26$ + taxes / personne",
      },
      {
        name: "Course régulière enfant (15 min)",
        price: "26$ + taxes / personne",
        description: "De 9 ans à 15 ans, minimum 54 pouces",
      },
      {
        name: "Mini grand prix (25 minutes)",
        price: "64$ + taxes / personne",
        description:
          "Bloc 1 : 5 min de qualification + 10 min course 1 • Bloc 2 : 10 min de course finale",
      },
      {
        name: "Grand prix (30 minutes)",
        price: "69$ + taxes / personne",
        description:
          "Bloc 1 : 5 min de qualification + 10 min course 1 • Bloc 2 : 15 min de course finale",
      },
      {
        name: "Carte VIP",
        price: "175$ + taxes / personne",
        description:
          "Accès à 5 courses gratuites de 15 minutes. Toutes les autres courses sont au tarif de course supplémentaire de 26$ + taxes.",
      },
    ],
  },
  {
    category: "Paintball",
    image: "/paintball.jpg",
    items: [
      {
        name: "Paintball",
        price: "39$ + taxes / personne",
        description: "Durée de 4 heures",
      },
      {
        name: "Combo Paintball Karting",
        price: "62$ + taxes / personne",
        description:
          "4 heures de paintball + 1 course régulière de 15 minutes",
      },
    ],
    notes: ["Minimum de 8 personnes.", "Durée : 4 heures."],
  },
  {
    category: "LABYRINTHE",
    image: "/labyrinth.jpg",
    items: [{ name: "Labyrinthe", price: "11$ + taxes / personne" }],
  },
  {
    category: "Quilles",
    image: "/17.jpg",
    items: [
      {
        name: "Allée de petites quilles",
        price: "30$ + taxes / heure / allée",
        description: "Bas antidérapants : 2$ + taxes / personne",
      },
    ],
  },
  {
    category: "Salle VIP",
    image: "/amusement.jpg",
    items: [
      {
        name: "Salle A",
        price: "65$ + taxes / h",
        description: "Avec activités",
      },
      {
        name: "Salle A",
        price: "75$ + taxes / h",
        description: "Sans activités",
      },
      {
        name: "Salle B",
        price: "60$ + taxes / h",
        description: "Avec activités",
      },
      {
        name: "Salle B",
        price: "70$ + taxes / h",
        description: "Sans activités",
      },
      {
        name: "Salle C",
        price: "50$ + taxes / h",
        description: "Avec activités",
      },
      {
        name: "Salle C",
        price: "60$ + taxes / h",
        description: "Sans activités",
      },
      {
        name: "Combo Salle A + B",
        price: "500$",
        description:
          "De 17h00 à 1h00, possibilité de service de bar inclus si plus de 40 personnes",
      },
    ],
    notes: [
      "Votre salle n’est pas accessible avant l’heure exacte de votre réservation.",
      "Si vous prévoyez du temps pour la décoration, veuillez réserver une heure supplémentaire.",
      "Il est obligatoire de se procurer sur place les chips, chocolats, bonbons, popcorn, jus, eau et boissons gazeuses.",
      "Les ballons contenant des confettis, les gommes et les bouteilles d’eau réutilisables ne sont pas permis.",
      "Il est strictement interdit d’apporter de la bière, des prêts-à-boire alcoolisés ou de l’alcool fort.",
      "Le non-respect de ces règles peut entraîner une expulsion immédiate.",
      "Cinq minutes avant la fin de votre réservation, un employé passera vérifier l’état de la salle.",
      "La salle doit être remise propre, en ordre et sans décorations.",
      "Des frais supplémentaires pourraient être appliqués selon l’état des lieux.",
      "Vous devez avoir quitté les lieux au plus tard une minute avant l’heure de fin (xxh59).",
    ],
  },
  {
    category: "Arcade",
    image: "/1.jpg",
    feeNote: "Frais de 2$ + taxes pour une nouvelle carte",
    priceTable: [
      { credits: 40, bonus: 0, total: 40, price: "10$ + taxes" },
      { credits: 100, bonus: 20, total: 120, price: "25$ + taxes" },
      { credits: 200, bonus: 60, total: 260, price: "50$ + taxes" },
      { credits: 300, bonus: 120, total: 420, price: "75$ + taxes" },
      { credits: 400, bonus: 240, total: 640, price: "100$ + taxes" },
    ],
    items: [],
  },
  {
    category: "Active Zone",
    image: "/active-zone.jpg",
    items: [
      {
        name: "Accès Active Zone",
        price: "30$ + taxes / personne",
        description: "75 minutes de jeux dans toutes les salles",
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
                      Le minigolf sera complètement démoli pour laisser la place
                      à un tout nouveau minigolf interactif avec une nouvelle
                      thématique. Réouverture prévue en mai. Suivez-nous sur les
                      réseaux pour en savoir plus&nbsp;!
                    </p>
                  </div>
                </motion.div>
              )}

              {category.category === "Arcade" && category.priceTable ? (
                <motion.div className="max-w-5xl mx-auto" variants={cardVariants}>
                  {category.feeNote && (
                    <p className="text-gray-300 mb-6 text-center">
                      {category.feeNote}
                    </p>
                  )}

                  <div className="bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
                    <table className="w-full text-left">
                      <thead className="border-b border-white/10">
                        <tr className="text-sm uppercase tracking-wider">
                          <th className="py-4 px-6 text-blue-400">Crédits</th>
                          <th className="py-4 px-6 text-green-400">Bonus</th>
                          <th className="py-4 px-6 text-gray-200">Total</th>
                          <th className="py-4 px-6 text-red-400 text-right">Prix</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.priceTable.map((row, idx) => (
                          <tr
                            key={idx}
                            className="border-b border-white/5 last:border-b-0"
                          >
                            <td className="py-4 px-6 text-lg">{row.credits}</td>
                            <td className="py-4 px-6 text-lg">{row.bonus}</td>
                            <td className="py-4 px-6 text-lg">{row.total}</td>
                            <td className="py-4 px-6 text-lg text-right font-semibold">
                              {row.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="flex flex-wrap justify-center gap-6"
                  variants={containerVariants}
                >
                  {category.items.map((item) => (
                    <motion.div
                      key={`${item.name}-${item.price}`}
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
              )}

              {category.notes && category.notes.length > 0 && (
                <motion.div
                  className="max-w-4xl mx-auto mt-8"
                  variants={cardVariants}
                >
                  <div className="bg-black/40 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 text-center">
                      Informations importantes
                    </h3>
                    <ul className="space-y-2 text-sm md:text-base text-gray-300">
                      {category.notes.map((note, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-orange-400 mt-0.5">•</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

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

      <div className="mt-12 text-center">
        <span className="text-gray-400 text-sm">* tx non incluses</span>
      </div>

      <Footer />
    </div>
  );
};

export default TarifsPage;
