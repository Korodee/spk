"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiStar, FiZap, FiTarget, FiActivity } from "react-icons/fi";
import Footer from "@/components/Footer";

const funArenaActivities = [
  {
    id: "arcade",
    name: "Arcade",
    title: "Salle d'Arcade",
    description:
      "Plongez dans un univers de jeux d'arcade modernes avec une ambiance néon immersive et colorée.",
    features: [
      "Sélection de jeux d'arcade modernes",
      "Ambiance lumineuse et sonore unique",
      "Espace adapté pour toute la famille",
      "Aucune réservation nécessaire",
    ],
    images: ["/1.jpg", "/2.jpg", "/4.jpg"],
    color: "from-purple-500 to-pink-500",
    icon: FiZap,
  },
  {
    id: "redemption",
    name: "Boutique de Récompenses",
    title: "Boutique d'Échange",
    description:
      "Échangez vos tickets contre des prix variés : peluches, bonbons et surprises pour tous les goûts.",
    features: [
      "Large sélection de peluches",
      "Figurines et collectibles",
      "Bonbons et friandises",
      "Articles exclusifs SPK",
    ],
    images: ["/7.jpg", "/8.jpg", "/9.jpg"],
    color: "from-blue-500 to-cyan-500",
    icon: FiStar,
  },
  {
    id: "winter-karting",
    name: "Karting d'hiver",
    title: "Karting d'hiver",
    description:
      "Karting sur courte piste enneigée. Vivez une expérience hivernale unique sur notre circuit adapté à la saison froide.",
    features: [
      "Piste courte enneigée",
      "Expérience hivernale unique",
      "Parfait pour les amateurs de sensations",
      "Informations détaillées disponibles sur place",
    ],
    images: ["/10.jpg", "/11.jpg", "/12.jpg"],
    color: "from-orange-500 to-red-500",
    icon: FiTarget,
  },
  {
    id: "petites-quilles",
    name: "Petites quilles",
    title: "Petites quilles",
    description:
      "4 allées de petites quilles destinées aux familles et fêtes d'enfants. Chaque allée peut accueillir jusqu'à 6 joueurs.",
    features: [
      "4 allées de petites quilles",
      "Idéal pour les familles et fêtes d'enfants",
      "Jusqu'à 6 joueurs par allée",
      "Bas antidérapants SPK obligatoires (2$ par joueur)",
    ],
    images: ["/16.jpg", "/17.jpg", "/18.jpg"],
    color: "from-indigo-500 to-violet-500",
    icon: FiActivity,
  },
  {
    id: "active-zone",
    name: "Active Zone",
    title: "Active Zone",
    description:
      "L'Active Zone comprend 10 salles de jeu, chacune équipée d'une technologie interactive réagissant en temps réel. Les joueurs y sautent, grimpent, lancent, courent et se déplacent d'un défi à l'autre, vivant une aventure palpitante.",
    features: [
      "10 salles de jeu interactives",
      "Technologie réagissant en temps réel",
      "Jeux physiques et dynamiques",
      "Parfait pour les groupes et anniversaires",
    ],
    images: ["/13.jpg", "/14.jpg", "/15.jpg"],
    color: "from-yellow-500 to-amber-500",
    icon: FiActivity,
    games: [
      {
        name: "3 Planchers interactifs",
        description:
          "Jeu sportif immersif qui combine sport et technologie interactive avec des lumières LED interactives et des capteurs. Des dalles LED ainsi que des lumières LED sur les murs s'illuminent de différentes couleurs (rouge : zone de danger, vert : zone de sécurité, bleu : zone de points).",
        skills: ["Agilité", "Coordination", "Capacités physiques"],
      },
      {
        name: "Arena Game",
        description:
          "Réinvente de façon innovante le jeu du ballon prisonnier en le digitalisant. Les joueurs doivent lancer des balles sur des cibles hexagonales lumineuses spécifiques affichées sur le mur, en respectant les règles du jeu et dans un temps imparti.",
        skills: ["Coordination œil-main", "Précision", "Vitesse"],
      },
      {
        name: "Climb Game",
        description:
          "Simule une ascension de falaise : les joueurs se tiennent au bord d'une étroite corniche en bois et doivent attraper les lumières vertes pour traverser la pièce. Ils doivent éviter les rouges et éteindre les bleues pour marquer des points — mais attention, les couleurs peuvent changer à tout moment.",
        skills: ["Coordination", "Multitâche", "Agilité"],
      },
      {
        name: "Hide",
        description:
          "Inspiré de la célèbre série télévisée mondiale Squid Game, Hide est un jeu de défi qui recrée les moments les plus intenses du scénario. Collaborez avec vos amis pour accomplir des missions tout en évitant d'être détectés par les capteurs.",
        skills: ["Réaction rapide", "Stratégie", "Communication"],
      },
      {
        name: "Hoops Game",
        description:
          "Apporte une touche innovante et dynamique au basketball. Les joueurs doivent accomplir des missions selon les règles du jeu dans un temps imparti. Le jeu combine des défis de tirs rapides et dynamiques ainsi que des tirs de précision ciblant des couleurs et des numéros spécifiques.",
        skills: ["Coordination œil-main", "Mémorisation", "Vitesse"],
      },
      {
        name: "Laser Maze",
        description:
          "Appuyez sur le bouton de démarrage, traversez la zone remplie de faisceaux laser et atteignez l'autre côté de la pièce dans le temps imparti pour terminer le niveau. Attention à ne pas toucher les faisceaux laser ! Au fur et à mesure de la progression, de nouveaux faisceaux apparaissent et se déplacent de manière aléatoire.",
        skills: ["Agilité", "Réaction rapide", "Concentration"],
      },
      {
        name: "Push",
        description:
          "Jeu de défi basé sur l'agilité et la mémoire. Entourés de murs de boutons multicolores, les joueurs doivent identifier des motifs, élaborer des stratégies, se souvenir des séquences et coopérer en équipe pour appuyer sur les bons boutons et réussir les missions.",
        skills: ["Coordination œil-main", "Précision", "Vitesse"],
      },
      {
        name: "Control",
        description:
          "Les joueurs doivent garder leur équilibre en se tenant sur une plateforme de commande et utiliser rapidité des pieds… et de l'esprit pour dominer la partie. Les dalles colorées au sol, sensibles au toucher, deviennent votre centre de contrôle. Utilisez votre corps pour activer les boutons : penchez-vous, marchez, sautez pour jouer à des classiques comme Tetris ou Pac-Man.",
        skills: ["Jeu de jambes", "Contrôle", "Coordination", "Précision"],
      },
    ],
  },
];

const HubDeJeuxPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/1.jpg"
            alt="Hub de Jeux"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-black/90 to-pink-900/80" />
        </div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl"
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
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-30 blur-xl"
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
            {/* Badge */}
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                Nouveau
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400">
                Hub de Jeux
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Découvrez notre nouvel espace de divertissement ultime. Des jeux
              d&apos;arcade aux espaces thématiques immersifs, vivez une
              expérience inoubliable.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="tel:418-693-3334">
                <motion.button
                  className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg uppercase tracking-wider rounded-full shadow-2xl flex items-center gap-3 mx-auto"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Réserver Maintenant
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
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
            <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center mx-auto">
              <motion.div
                className="w-1 h-3 bg-purple-500 rounded-full mt-2"
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

      {/* Activities Sections */}
      {funArenaActivities.map((activity, index) => (
        <section
          key={activity.id}
          id={activity.id}
          className="relative py-24 overflow-hidden"
        >
          {/* Background Gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-10`}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            {/* Special layout for Active Zone with games */}
            {activity.id === "active-zone" && activity.games ? (
              <div>
                {/* Header Section */}
                <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${activity.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <activity.icon className="text-white text-3xl" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                      {activity.title}
                    </h2>
                  </div>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                    {activity.description}
                  </p>
                  <ul className="flex flex-wrap justify-center gap-4 mb-8">
                    {activity.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.2 + featureIndex * 0.1,
                        }}
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${activity.color}`}
                        />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Games Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {activity.games.map((game, gameIndex) => (
                    <motion.div
                      key={gameIndex}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.3 + gameIndex * 0.1,
                      }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {game.name}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {game.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {game.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-full text-xs text-yellow-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  className="text-center text-sm text-gray-400 mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Aucune réservation nécessaire pour cette zone. Présentez-vous
                  sur place pour profiter de l&apos;activité.
                </motion.p>
              </div>
            ) : (
              /* Standard layout for other activities */
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image Gallery */}
                <motion.div
                  className={index % 2 === 1 ? "lg:col-start-2" : ""}
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {activity.images.slice(0, 3).map((img, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        className={`relative h-64 rounded-2xl overflow-hidden ${
                          imgIndex === 0 ? "col-span-2" : ""
                        }`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: 0.2 + imgIndex * 0.1,
                        }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Image
                          src={img}
                          alt={`${activity.name} ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                  initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${activity.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <activity.icon className="text-white text-3xl" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                      {activity.title}
                    </h2>
                  </div>

                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {activity.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {activity.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.4 + featureIndex * 0.1,
                        }}
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${activity.color}`}
                        />
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <p className="text-sm text-gray-400">
                    Aucune réservation nécessaire pour cette zone. Présentez-vous
                    sur place pour profiter de l&apos;activité.
                  </p>
                </motion.div>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Upcoming Snack Bar Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="inline-block bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-300 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                Bientôt disponible
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Casse-Croûte{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                Printemps 2026
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
              Nous pourrons bientôt accommoder les clients en leur offrant un
              choix de menu sur place.
            </p>
            <p className="text-sm text-gray-400 mt-6">
              Restez à l&apos;affût pour plus de détails !
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-black to-pink-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,rgba(255,255,255,.1)_100%)] bg-[length:20px_20px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Prêt à vivre l&apos;expérience{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Hub de Jeux
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Réservez dès maintenant et plongez dans un monde de divertissement
              et d&apos;amusement sans limites.
            </p>
            <a href="tel:418-693-3334">
              <motion.button
                className="px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-md sm:text-xl uppercase tracking-wider rounded-full shadow-2xl flex items-center gap-3 mx-auto"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 50px rgba(168, 85, 247, 0.7)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Réserver Maintenant
                <FiArrowRight className="text-2xl" />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HubDeJeuxPage;
