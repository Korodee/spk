"use client";
import { motion, Variants } from "framer-motion";
import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

type RateItem = {
  name: string;
  price: string;
  subtitle?: string;
  description?: string;
};

type ArcadePriceRow = {
  credits: number;
  bonus: number;
  total: number;
  price: string;
};

type RateCategory = {
  category: string;
  image: string;
  items: RateItem[];
  notes?: string[];
  feeNote?: string;
  priceTable?: ArcadePriceRow[];
};

const ratesData: RateCategory[] = [
  {
    category: "Laser tag",
    image: "/laser-tag.jpg",
    items: [
      {
        name: "1ère partie",
        price: "12.00$",
        subtitle: "+ taxes / personne",
      },
      {
        name: "2ème partie",
        price: "10.00$",
        subtitle: "+ taxes / personne",
      },
      {
        name: "Parties supplémentaires",
        price: "8.00$",
        subtitle: "+ taxes / personne",
      },
    ],
    notes: [
      "Apportez des vêtements de sport et des espadrilles.",
      "Après la 2e partie, les parties supplémentaires reviennent à 7.50$.",
      "Tous les prix sont par personne.",
    ],
  },
  {
    category: "Mini-golf fluo",
    image: "/golf.jpg",
    items: [
      {
        name: "Adulte",
        price: "16.00$",
        subtitle: "+ taxes / personne",
      },
      {
        name: "Enfant (15 ans et moins)",
        price: "13.50$",
        subtitle: "+ taxes / personne",
      },
    ],
    notes: ["Prix par personne."],
  },
  {
    category: "Réalité Virtuelle",
    image: "/virtual-real.jpg",
    items: [
      {
        name: "Régulière",
        price: "7.00$",
        subtitle: "+ taxes / partie",
      },
      {
        name: "Horreur",
        price: "9.00$",
        subtitle: "+ taxes / partie",
      },
      {
        name: "Zombie",
        price: "10.00$",
        subtitle: "+ taxes / partie / personne",
      },
      {
        name: "Chaise 360",
        price: "12.00$",
        subtitle: "+ taxes / partie",
      },
    ],
    notes: ["Chaise 360 : maximum 250 lbs."],
  },
  {
    category: "Karting",
    image: "/karting.jpg",
    items: [
      {
        name: "Course régulière adulte",
        price: "37.00$",
        subtitle: "+ taxes / personne",
        description: "15 minutes de course",
      },
      {
        name: "Course supplémentaire",
        price: "27.00$",
        subtitle: "+ taxes / personne",
        description: "15 minutes de course",
      },
      {
        name: "Course régulière enfant",
        price: "27.00$",
        subtitle: "+ taxes / personne",
        description: "De 9 ans à 15 ans avec un minimum de 54 pouces",
      },
      {
        name: "Mini grand prix",
        price: "65.00$",
        subtitle: "+ taxes / personne",
        description:
          "Bloc 1 : 5 min de qualification + 10 min course 1 • Bloc 2 : 10 min de course finale",
      },
      {
        name: "Grand prix",
        price: "70.00$",
        subtitle: "+ taxes / personne",
        description:
          "Bloc 1 : 5 min de qualification + 10 min course 1 • Bloc 2 : 15 min de course finale",
      },
      {
        name: "Carte VIP",
        price: "175.00$",
        subtitle: "+ taxes / personne",
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
        price: "39.00$",
        subtitle: "+ taxes / personne",
        description: "Durée de 4 heures",
      },
      {
        name: "Combo Paintball Karting",
        price: "67.00$",
        subtitle: "+ taxes / personne",
        description:
          "4 heures de paintball + 1 course régulière de 15 minutes",
      },
      {
        name: "Combo Paintball Karting (Mini Grand-Prix)",
        price: "89.00$",
        subtitle: "+ taxes / personne",
        description:
          "4 heures de paintball + 1 Mini Grand-Prix de 25 minutes",
      },
      {
        name: "Combo Paintball Karting (Grand-Prix)",
        price: "94.00$",
        subtitle: "+ taxes / personne",
        description:
          "4 heures de paintball + 1 Grand-Prix de 30 minutes",
      },
    ],
    notes: ["Minimum de 8 personnes.", "Durée de 4 heures."],
  },
  {
    category: "LABYRINTHE",
    image: "/labyrinth.jpg",
    items: [
      {
        name: "Labyrinthe",
        price: "11.00$",
        subtitle: "+ taxes / personne",
      },
    ],
  },
  {
    category: "Quilles",
    image: "/17.jpg",
    items: [
      {
        name: "Allée de petites quilles",
        price: "32.00$",
        subtitle: "+ taxes / heure / allée",
        description: "2.00$ + taxes / personne pour les bas antidérapants",
      },
    ],
  },
  {
    category: "Salle VIP",
    image: "/amusement.jpg",
    items: [
      {
        name: "Salle A",
        price: "65.00$",
        subtitle: "+ taxes / h",
        description: "Avec 50$ et plus d'activités",
      },
      {
        name: "Salle A",
        price: "75.00$",
        subtitle: "+ taxes / h",
        description: "Sans activités",
      },
      {
        name: "Salle B",
        price: "60.00$",
        subtitle: "+ taxes / h",
        description: "Avec 50$ et plus d'activités",
      },
      {
        name: "Salle B",
        price: "70.00$",
        subtitle: "+ taxes / h",
        description: "Sans activités",
      },
      {
        name: "Salle C",
        price: "50.00$",
        subtitle: "+ taxes / h",
        description: "Avec 50$ et plus d'activités",
      },
      {
        name: "Salle C",
        price: "60.00$",
        subtitle: "+ taxes / h",
        description: "Sans activités",
      },
      {
        name: "Combo Salle A + B",
        price: "500.00$",
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
    feeNote: "Frais de 2.00$ + taxes pour une nouvelle carte",
    priceTable: [
      { credits: 40, bonus: 0, total: 40, price: "10.00$ + taxes" },
      { credits: 100, bonus: 20, total: 120, price: "25.00$ + taxes" },
      { credits: 200, bonus: 60, total: 260, price: "50.00$ + taxes" },
      { credits: 300, bonus: 120, total: 420, price: "75.00$ + taxes" },
      { credits: 400, bonus: 240, total: 640, price: "100.00$ + taxes" },
    ],
    items: [],
  },
  {
    category: "Active Zone",
    image: "/active-zone.jpg",
    items: [
      {
        name: "Accès Active Zone",
        price: "31.00$",
        subtitle: "+ taxes / personne",
        description: "75 minutes de jeux dans toutes les salles",
      },
    ],
  },
];

const categoryToSlug: { [key: string]: string } = {
  "Laser tag": "jeu-laser",
  "Mini-golf fluo": "minigolf",
  "Réalité Virtuelle": "realite-virtuelle",
  Karting: "karting",
  Paintball: "paintball",
  LABYRINTHE: "labyrinth",
  "Salle VIP": "salle-arcade-vip",
  "Active Zone": "hub-de-jeux#active-zone",
  Quilles: "hub-de-jeux#petites-quilles",
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

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="relative mb-8"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500 mb-4 font-[family-name:var(--font-montserrat)]">
              Nos Tarifs
            </h1>

            <motion.div
              className="h-1 bg-gradient-to-r from-orange-400 via-purple-500 to-cyan-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

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

        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <p className="text-xs md:text-sm text-gray-400 mb-2 tracking-[0.2em] uppercase">
            Défiler vers le bas
          </p>
        
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

              {category.category === "Salle VIP" ? (
                <motion.div className="max-w-7xl mx-auto" variants={cardVariants}>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    <div className="bg-black/40 backdrop-blur-lg p-6 rounded-2xl border border-white/10 group flex flex-col text-center transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0px_15px_30px_rgba(99,50,200,0.4)]">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-white mb-2">
                          Salle A
                        </h3>

                        <div className="mt-6">
                          <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
                            65$
                          </p>
                          <p className="text-sm text-gray-400 mt-2">
                            + taxes / h
                          </p>
                          <p className="text-sm text-gray-400 mt-3">
                            Avec 50$ et plus d&apos;activités
                          </p>
                        </div>

                        <div className="my-6 h-px bg-white/10" />

                        <div>
                          <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
                            75$
                          </p>
                          <p className="text-sm text-gray-400 mt-2">
                            + taxes / h
                          </p>
                          <p className="text-sm text-gray-400 mt-3">
                            Sans activités
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/40 backdrop-blur-lg p-6 rounded-2xl border border-white/10 group flex flex-col text-center transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0px_15px_30px_rgba(99,50,200,0.4)]">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-white mb-2">
                          Salle B
                        </h3>

                        <div className="mt-6">
                          <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
                            60$
                          </p>
                          <p className="text-sm text-gray-400 mt-2">
                            + taxes / h
                          </p>
                          <p className="text-sm text-gray-400 mt-3">
                            Avec 50$ et plus d&apos;activités
                          </p>
                        </div>

                        <div className="my-6 h-px bg-white/10" />

                        <div>
                          <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
                            70$
                          </p>
                          <p className="text-sm text-gray-400 mt-2">
                            + taxes / h
                          </p>
                          <p className="text-sm text-gray-400 mt-3">
                            Sans activités
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/40 backdrop-blur-lg p-6 rounded-2xl border border-white/10 group flex flex-col text-center transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0px_15px_30px_rgba(99,50,200,0.4)]">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-white mb-2">
                          Salle C
                        </h3>

                        <div className="mt-6">
                          <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
                            50$
                          </p>
                          <p className="text-sm text-gray-400 mt-2">
                            + taxes / h
                          </p>
                          <p className="text-sm text-gray-400 mt-3">
                            Avec 50$ et plus d&apos;activités
                          </p>
                        </div>

                        <div className="my-6 h-px bg-white/10" />

                        <div>
                          <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
                            60$
                          </p>
                          <p className="text-sm text-gray-400 mt-2">
                            + taxes / h
                          </p>
                          <p className="text-sm text-gray-400 mt-3">
                            Sans activités
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/40 backdrop-blur-lg p-6 rounded-2xl border border-white/10 group flex flex-col text-center transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0px_15px_30px_rgba(99,50,200,0.4)]">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-white mb-2">
                          Combo Salle A + B
                        </h3>

                        <div className="mt-6">
                          <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
                            500$
                          </p>
                          <p className="text-sm text-gray-400 mt-3">
                            De 17h00 à 1h00
                          </p>
                          <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                            Possibilité de service de bar inclus si plus de 40
                            personnes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://book.timify.com/?accountId=604d33264585c611886149c1&hideCloseButton=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full max-w-md mx-auto mt-10"
                  >
                    <motion.button
                      className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-300 px-8 py-4 md:py-5 text-lg md:text-xl font-black uppercase tracking-wide text-black shadow-lg shadow-yellow-400/30 transition-all duration-300"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Réserver
                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.button>
                  </a>
                </motion.div>
              ) : category.category === "Arcade" && category.priceTable ? (
                <motion.div
                  className="max-w-5xl mx-auto"
                  variants={cardVariants}
                >
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
                          <th className="py-4 px-6 text-red-400 text-right">
                            Prix
                          </th>
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
                      key={`${item.name}-${item.price}-${item.subtitle ?? ""}`}
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
                        {item.subtitle && (
                          <p className="text-sm text-gray-400 mt-2">
                            {item.subtitle}
                          </p>
                        )}
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

              {categoryToSlug[category.category] && (
                <motion.div
                  className="text-center mt-12"
                  variants={cardVariants}
                >
                  <Link
                    href={
                      category.category === "Active Zone" ||
                      category.category === "Quilles"
                        ? `/${categoryToSlug[category.category]}`
                        : `/activity/${categoryToSlug[category.category]}`
                    }
                  >
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

      <Footer />
    </div>
  );
};

export default TarifsPage;
